'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function TablesPage() {
  const [tables, setTables] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTable, setSelectedTable] = useState(null);

  useEffect(() => {
    loadDatabaseSchema();
  }, []);

  const loadDatabaseSchema = async () => {
    try {
      setError(null);
      const response = await fetch('/api/evomanias/database-schema');
      const data = await response.json();
      
      if (data.tables) {
        setTables(data.tables);
        if (data.tables.length > 0) {
          setSelectedTable(data.tables[0].name);
        }
      } else if (data.error) {
        setError(`Error: ${data.error}`);
      }
    } catch (err) {
      console.error('Error loading schema:', err);
      setError('Failed to load database schema');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div style={{
          marginBottom: '2rem',
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(124, 184, 255, 0.1) 0%, rgba(90, 159, 230, 0.05) 100%)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(124, 184, 255, 0.2)',
          padding: '2rem',
          borderRadius: '12px'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 700,
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #7cb8ff 0%, #5a9fe6 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            📊 Database Tables
          </h1>
          <p style={{
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '0'
          }}>
            Explore all tables and data in your Aiven database
          </p>
        </div>

        {error && (
          <div style={{
            padding: '1rem',
            background: 'rgba(220, 53, 69, 0.1)',
            border: '1px solid rgba(220, 53, 69, 0.3)',
            borderRadius: '4px',
            color: '#ff6b6b',
            marginBottom: '2rem'
          }}>
            {error}
          </div>
        )}

        {loading ? (
          <div style={{
            textAlign: 'center',
            padding: '3rem',
            color: 'rgba(255, 255, 255, 0.5)'
          }}>
            Loading database schema...
          </div>
        ) : tables.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '3rem',
            color: 'rgba(255, 255, 255, 0.5)'
          }}>
            No tables found in database
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: '250px 1fr',
            gap: '2rem'
          }}>
            {/* Table List */}
            <div style={{
              background: 'rgba(20, 20, 30, 0.8)',
              border: '1px solid rgba(124, 184, 255, 0.2)',
              borderRadius: '12px',
              overflow: 'hidden',
              height: 'fit-content'
            }}>
              <div style={{
                background: 'rgba(124, 184, 255, 0.1)',
                padding: '1rem',
                borderBottom: '1px solid rgba(124, 184, 255, 0.2)',
                fontWeight: '700',
                color: '#7cb8ff'
              }}>
                Tables ({tables.length})
              </div>
              <div>
                {tables.map((table) => (
                  <button
                    key={table.name}
                    onClick={() => setSelectedTable(table.name)}
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '1rem',
                      textAlign: 'left',
                      background: selectedTable === table.name 
                        ? 'rgba(124, 184, 255, 0.2)' 
                        : 'transparent',
                      border: 'none',
                      borderLeft: selectedTable === table.name 
                        ? '3px solid #7cb8ff' 
                        : '3px solid transparent',
                      color: selectedTable === table.name ? '#7cb8ff' : 'rgba(255, 255, 255, 0.7)',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      fontSize: '0.875rem',
                      fontWeight: '500'
                    }}
                    onMouseEnter={(e) => {
                      if (selectedTable !== table.name) {
                        e.currentTarget.style.opacity = '0.8';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedTable !== table.name) {
                        e.currentTarget.style.opacity = '1';
                      }
                    }}
                  >
                    <div style={{ fontWeight: '600' }}>{table.name}</div>
                    <div style={{ fontSize: '0.75rem', marginTop: '0.25rem' }}>
                      {table.rowCount} rows
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Table Details */}
            {selectedTable && (
              <TableViewer tableName={selectedTable} />
            )}
          </div>
        )}

        {/* Back Button */}
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <Link
            href="/evomanias"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              background: 'linear-gradient(135deg, #7cb8ff 0%, #5a9fe6 100%)',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              transition: 'opacity 0.3s'
            }}
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

function TableViewer({ tableName }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState('id');
  const [sortOrder, setSortOrder] = useState('DESC');

  useEffect(() => {
    loadTableData();
  }, [tableName, page, sortBy, sortOrder]);

  const loadTableData = async () => {
    try {
      setError(null);
      const params = new URLSearchParams({
        page: page.toString(),
        limit: '20',
        sortBy,
        sortOrder
      });

      const response = await fetch(`/api/evomanias/table/${tableName}?${params}`);
      const result = await response.json();

      if (result.data !== undefined) {
        setData(result);
      } else if (result.error) {
        setError(`Error: ${result.error}`);
      }
    } catch (err) {
      console.error('Error loading table data:', err);
      setError('Failed to load table data');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div style={{
        background: 'rgba(20, 20, 30, 0.8)',
        border: '1px solid rgba(124, 184, 255, 0.2)',
        borderRadius: '12px',
        padding: '3rem',
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.5)'
      }}>
        Loading table data...
      </div>
    );
  }

  if (error || !data) {
    return (
      <div style={{
        background: 'rgba(20, 20, 30, 0.8)',
        border: '1px solid rgba(124, 184, 255, 0.2)',
        borderRadius: '12px',
        padding: '2rem',
        color: '#ff6b6b'
      }}>
        {error || 'Unable to load table'}
      </div>
    );
  }

  const columns = data.columns || [];
  const rows = data.data || [];
  const { pagination } = data;

  return (
    <div>
      <div style={{
        background: 'rgba(20, 20, 30, 0.8)',
        border: '1px solid rgba(124, 184, 255, 0.2)',
        borderRadius: '12px',
        overflow: 'hidden',
        marginBottom: '2rem'
      }}>
        {/* Table Header */}
        <div style={{
          background: 'rgba(124, 184, 255, 0.1)',
          padding: '1rem',
          borderBottom: '1px solid rgba(124, 184, 255, 0.2)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <h2 style={{
              fontSize: '1.25rem',
              fontWeight: '700',
              color: '#7cb8ff',
              margin: '0 0 0.25rem 0'
            }}>
              {tableName}
            </h2>
            <p style={{
              fontSize: '0.875rem',
              color: 'rgba(255, 255, 255, 0.6)',
              margin: 0
            }}>
              {pagination.total} total rows • {columns.length} columns
            </p>
          </div>
          <button
            onClick={loadTableData}
            style={{
              padding: '0.5rem 1rem',
              background: 'rgba(124, 184, 255, 0.2)',
              border: '1px solid rgba(124, 184, 255, 0.4)',
              color: '#7cb8ff',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '0.875rem'
            }}
          >
            Refresh
          </button>
        </div>

        {/* Table */}
        <div style={{ overflowX: 'auto' }}>
          <table style={{
            width: '100%',
            borderCollapse: 'collapse'
          }}>
            <thead>
              <tr style={{
                background: 'rgba(124, 184, 255, 0.05)',
                borderBottom: '1px solid rgba(124, 184, 255, 0.2)'
              }}>
                {columns.map((col) => (
                  <th
                    key={col.name}
                    onClick={() => {
                      if (sortBy === col.name) {
                        setSortOrder(sortOrder === 'ASC' ? 'DESC' : 'ASC');
                      } else {
                        setSortBy(col.name);
                        setSortOrder('DESC');
                      }
                    }}
                    style={{
                      padding: '1rem',
                      textAlign: 'left',
                      fontWeight: '700',
                      color: '#7cb8ff',
                      fontSize: '0.875rem',
                      cursor: 'pointer',
                      userSelect: 'none',
                      whiteSpace: 'nowrap',
                      background: sortBy === col.name ? 'rgba(124, 184, 255, 0.1)' : 'transparent'
                    }}
                  >
                    {col.name}
                    {sortBy === col.name && (
                      <span style={{ marginLeft: '0.5rem' }}>
                        {sortOrder === 'ASC' ? '↑' : '↓'}
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr
                  key={idx}
                  style={{
                    borderBottom: '1px solid rgba(124, 184, 255, 0.1)',
                    background: idx % 2 === 0 ? 'transparent' : 'rgba(124, 184, 255, 0.02)',
                  }}
                >
                  {columns.map((col) => (
                    <td
                      key={col.name}
                      style={{
                        padding: '0.75rem 1rem',
                        fontSize: '0.875rem',
                        color: 'rgba(255, 255, 255, 0.8)',
                        wordBreak: 'break-word',
                        maxWidth: '300px',
                        whiteSpace: 'pre-wrap'
                      }}
                    >
                      {formatValue(row[col.name], col.type)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {pagination.pages > 1 && (
          <div style={{
            padding: '1rem',
            background: 'rgba(124, 184, 255, 0.05)',
            borderTop: '1px solid rgba(124, 184, 255, 0.2)',
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
            alignItems: 'center'
          }}>
            <button
              onClick={() => setPage(Math.max(1, page - 1))}
              disabled={page === 1}
              style={{
                padding: '0.5rem 1rem',
                background: page === 1 ? 'rgba(124, 184, 255, 0.1)' : 'rgba(124, 184, 255, 0.2)',
                border: '1px solid rgba(124, 184, 255, 0.4)',
                color: '#7cb8ff',
                borderRadius: '6px',
                cursor: page === 1 ? 'not-allowed' : 'pointer',
                fontWeight: '600'
              }}
            >
              ← Previous
            </button>

            {Array.from({ length: Math.min(pagination.pages, 5) }, (_, i) => {
              const pageNum = i + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => setPage(pageNum)}
                  style={{
                    padding: '0.5rem 0.75rem',
                    background: page === pageNum ? '#7cb8ff' : 'rgba(124, 184, 255, 0.1)',
                    border: '1px solid rgba(124, 184, 255, 0.4)',
                    color: page === pageNum ? '#000' : '#7cb8ff',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontWeight: '600',
                    minWidth: '2.5rem'
                  }}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              onClick={() => setPage(Math.min(pagination.pages, page + 1))}
              disabled={page === pagination.pages}
              style={{
                padding: '0.5rem 1rem',
                background: page === pagination.pages ? 'rgba(124, 184, 255, 0.1)' : 'rgba(124, 184, 255, 0.2)',
                border: '1px solid rgba(124, 184, 255, 0.4)',
                color: '#7cb8ff',
                borderRadius: '6px',
                cursor: page === pagination.pages ? 'not-allowed' : 'pointer',
                fontWeight: '600'
              }}
            >
              Next →
            </button>

            <span style={{
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.875rem'
            }}>
              Page {page} of {pagination.pages}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function formatValue(value, type) {
  if (value === null || value === undefined) {
    return <span style={{ color: 'rgba(255, 255, 255, 0.4)' }}>NULL</span>;
  }

  if (typeof value === 'boolean') {
    return value ? '✓ true' : '✗ false';
  }

  if (type.includes('TIMESTAMP') || type.includes('DATETIME') || type.includes('DATE')) {
    try {
      const date = new Date(value);
      return date.toLocaleString();
    } catch {
      return String(value);
    }
  }

  if (typeof value === 'number' && value > 1000000) {
    return value.toLocaleString();
  }

  return String(value);
}
