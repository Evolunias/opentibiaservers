'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AccountsPage() {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    loadAccounts();
    
    const interval = setInterval(() => {
      loadAccounts();
    }, 5000);

    return () => clearInterval(interval);
  }, [page]);

  const loadAccounts = async () => {
    try {
      setError(null);
      const response = await fetch(`/api/evomanias/table/accounts?page=${page}&limit=20&sortBy=created&sortOrder=DESC`);
      const data = await response.json();

      if (data.data !== undefined) {
        setAccounts(data.data || []);
        setLastUpdated(new Date().toLocaleTimeString());
      } else if (data.error) {
        setError(`Error: ${data.error}`);
      }
    } catch (err) {
      console.error('Error loading accounts:', err);
      setError('Failed to load accounts data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4">
      <div className="max-w-6xl mx-auto">
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
            👥 Player Accounts
          </h1>
          <p style={{
            color: 'rgba(255, 255, 255, 0.7)',
          }}>
            All registered player accounts in the system
          </p>
          {lastUpdated && (
            <p style={{
              fontSize: '0.875rem',
              color: 'rgba(124, 184, 255, 0.8)',
              marginTop: '0.5rem'
            }}>
              Last updated: {lastUpdated}
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

        {/* Accounts Table */}
        <div style={{
          background: 'rgba(20, 20, 30, 0.8)',
          border: '1px solid rgba(124, 184, 255, 0.2)',
          borderRadius: '12px',
          overflow: 'hidden',
          marginBottom: '2rem'
        }}>
          {loading ? (
            <div style={{
              padding: '3rem',
              textAlign: 'center',
              color: 'rgba(255, 255, 255, 0.5)'
            }}>
              Loading accounts...
            </div>
          ) : accounts.length === 0 ? (
            <div style={{
              padding: '3rem',
              textAlign: 'center',
              color: 'rgba(255, 255, 255, 0.5)'
            }}>
              No accounts found
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{
                width: '100%',
                borderCollapse: 'collapse'
              }}>
                <thead>
                  <tr style={{
                    background: 'rgba(124, 184, 255, 0.1)',
                    borderBottom: '1px solid rgba(124, 184, 255, 0.2)'
                  }}>
                    <th style={{
                      padding: '1rem',
                      textAlign: 'left',
                      fontWeight: '700',
                      color: '#7cb8ff',
                      fontSize: '0.875rem'
                    }}>ID</th>
                    <th style={{
                      padding: '1rem',
                      textAlign: 'left',
                      fontWeight: '700',
                      color: '#7cb8ff',
                      fontSize: '0.875rem'
                    }}>Username</th>
                    <th style={{
                      padding: '1rem',
                      textAlign: 'left',
                      fontWeight: '700',
                      color: '#7cb8ff',
                      fontSize: '0.875rem'
                    }}>Email</th>
                    <th style={{
                      padding: '1rem',
                      textAlign: 'left',
                      fontWeight: '700',
                      color: '#7cb8ff',
                      fontSize: '0.875rem'
                    }}>Created</th>
                  </tr>
                </thead>
                <tbody>
                  {accounts.map((account, idx) => (
                    <tr
                      key={account.id}
                      style={{
                        borderBottom: '1px solid rgba(124, 184, 255, 0.1)',
                        background: idx % 2 === 0 ? 'transparent' : 'rgba(124, 184, 255, 0.02)',
                      }}
                    >
                      <td style={{
                        padding: '1rem',
                        fontSize: '0.875rem',
                        color: '#7cb8ff',
                        fontWeight: '600'
                      }}>
                        {account.id}
                      </td>
                      <td style={{
                        padding: '1rem',
                        fontSize: '0.875rem',
                        color: 'rgba(255, 255, 255, 0.8)'
                      }}>
                        {account.name || '—'}
                      </td>
                      <td style={{
                        padding: '1rem',
                        fontSize: '0.875rem',
                        color: 'rgba(255, 255, 255, 0.7)'
                      }}>
                        {account.email || '—'}
                      </td>
                      <td style={{
                        padding: '1rem',
                        fontSize: '0.875rem',
                        color: 'rgba(255, 255, 255, 0.6)'
                      }}>
                        {account.created ? new Date(account.created).toLocaleDateString() : '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '1rem'
        }}>
          <Link
            href="/evomanias/tables"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              background: 'rgba(124, 184, 255, 0.2)',
              color: '#7cb8ff',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              textAlign: 'center',
              border: '1px solid rgba(124, 184, 255, 0.4)'
            }}
          >
            All Tables
          </Link>
          <Link
            href="/evomanias/players"
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              background: 'rgba(124, 184, 255, 0.2)',
              color: '#7cb8ff',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              textAlign: 'center',
              border: '1px solid rgba(124, 184, 255, 0.4)'
            }}
          >
            Players
          </Link>
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
              textAlign: 'center'
            }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
