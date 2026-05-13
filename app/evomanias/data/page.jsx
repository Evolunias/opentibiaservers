'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function DataExplorerPage() {
  const [tables, setTables] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const quickAccessPages = [
    {
      title: '🏆 Players Rankings',
      description: 'View all characters ranked by level and experience',
      href: '/evomanias/players',
      icon: '🏆'
    },
    {
      title: '🌐 Online Now',
      description: 'See adventurers currently online in real-time',
      href: '/evomanias/online',
      icon: '🌐'
    },
    {
      title: '👥 Accounts',
      description: 'Browse all player accounts in the system',
      href: '/evomanias/accounts',
      icon: '👥'
    },
    {
      title: '📊 All Tables',
      description: 'Explore all database tables with full controls',
      href: '/evomanias/tables',
      icon: '📊'
    }
  ];

  const tableIcons = {
    players: '⚔️',
    accounts: '👤',
    announcements: '📢',
    news: '📰',
    market: '🛍️',
    guilds: '🏰',
    items: '📦',
    quests: '📜',
    events: '🎉',
    trades: '💰',
    storage: '🏠',
  };

  const getTableIcon = (tableName) => {
    return tableIcons[tableName.toLowerCase()] || '📋';
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
            📊 Data Explorer
          </h1>
          <p style={{
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '0.5rem'
          }}>
            Real-time access to all your Aiven database tables
          </p>
          {!loading && tables.length > 0 && (
            <p style={{
              fontSize: '0.875rem',
              color: 'rgba(124, 184, 255, 0.8)'
            }}>
              {tables.length} tables • {tables.reduce((sum, t) => sum + t.rowCount, 0).toLocaleString()} total records
            </p>
          )}
        </div>

        {error && (
          <div style={{
            padding: '1rem',
            background: 'rgba(220, 53, 69, 0.1)',
            border: '1px solid rgba(220, 53, 69, 0.3)',
            borderRadius: '4px',
            color: '#ff6b6b',
            marginBottom: '2rem',
            fontSize: '0.875rem'
          }}>
            {error}
          </div>
        )}

        {/* Quick Access */}
        <div style={{
          marginBottom: '3rem'
        }}>
          <h2 style={{
            fontSize: '1.25rem',
            fontWeight: '700',
            marginBottom: '1rem',
            color: 'rgba(255, 255, 255, 0.9)'
          }}>
            ⚡ Quick Access
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1rem'
          }}>
            {quickAccessPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                style={{
                  display: 'block',
                  padding: '1.5rem',
                  background: 'rgba(20, 20, 30, 0.8)',
                  border: '1px solid rgba(124, 184, 255, 0.2)',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  color: 'white',
                  transition: 'all 0.3s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(20, 20, 30, 0.95)';
                  e.currentTarget.style.borderColor = 'rgba(124, 184, 255, 0.4)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(20, 20, 30, 0.8)';
                  e.currentTarget.style.borderColor = 'rgba(124, 184, 255, 0.2)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>
                  {page.icon}
                </div>
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: '700',
                  color: '#7cb8ff',
                  marginBottom: '0.5rem',
                  margin: 0
                }}>
                  {page.title}
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.6)',
                  margin: 0
                }}>
                  {page.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* All Tables */}
        <div>
          <h2 style={{
            fontSize: '1.25rem',
            fontWeight: '700',
            marginBottom: '1rem',
            color: 'rgba(255, 255, 255, 0.9)'
          }}>
            📋 All Tables
          </h2>

          {loading ? (
            <div style={{
              padding: '2rem',
              textAlign: 'center',
              color: 'rgba(255, 255, 255, 0.5)'
            }}>
              Loading database schema...
            </div>
          ) : tables.length === 0 ? (
            <div style={{
              padding: '2rem',
              textAlign: 'center',
              color: 'rgba(255, 255, 255, 0.5)'
            }}>
              No tables found
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '1rem'
            }}>
              {tables.map((table) => (
                <Link
                  key={table.name}
                  href={`/evomanias/tables?table=${table.name}`}
                  style={{
                    display: 'block',
                    padding: '1.25rem',
                    background: 'rgba(20, 20, 30, 0.8)',
                    border: '1px solid rgba(124, 184, 255, 0.2)',
                    borderRadius: '12px',
                    textDecoration: 'none',
                    color: 'white',
                    transition: 'all 0.3s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(124, 184, 255, 0.4)';
                    e.currentTarget.style.background = 'rgba(124, 184, 255, 0.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(124, 184, 255, 0.2)';
                    e.currentTarget.style.background = 'rgba(20, 20, 30, 0.8)';
                  }}
                >
                  <div style={{
                    fontSize: '1.5rem',
                    marginBottom: '0.5rem'
                  }}>
                    {getTableIcon(table.name)}
                  </div>
                  <h3 style={{
                    fontSize: '0.95rem',
                    fontWeight: '700',
                    color: '#7cb8ff',
                    marginBottom: '0.5rem',
                    margin: 0
                  }}>
                    {table.name}
                  </h3>
                  <p style={{
                    fontSize: '0.8rem',
                    color: 'rgba(255, 255, 255, 0.6)',
                    margin: 0
                  }}>
                    {table.columns.length} columns • {table.rowCount} rows
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Back Button */}
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
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
