'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function OnlinePage() {
  const [onlinePlayers, setOnlinePlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [syncStatus, setSyncStatus] = useState('syncing');

  const vocations = {
    'Knight': '🗡️',
    'Paladin': '🏹',
    'Druid': '🌿',
    'Sorcerer': '⚡',
  };

  useEffect(() => {
    loadOnlinePlayers();
    
    // Real-time sync - refresh every 2 seconds for live updates
    const interval = setInterval(() => {
      loadOnlinePlayers();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const loadOnlinePlayers = async () => {
    try {
      setSyncStatus('syncing');
      setError(null);
      const response = await fetch('/api/evomanias/online-players');
      const data = await response.json();
      setOnlinePlayers(data.onlinePlayers || []);
      setLastUpdated(new Date().toLocaleTimeString());
      setSyncStatus('synced');
    } catch (err) {
      console.error('Error loading online players:', err);
      setError('Unable to load player data');
      setSyncStatus('error');
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
            🌐 Adventurers Online
          </h1>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap'
          }}>
            <p style={{
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#00bc8c'
            }}>
              {onlinePlayers.length} online
            </p>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.875rem',
              color: syncStatus === 'synced' ? '#00bc8c' : syncStatus === 'error' ? '#ff6b6b' : '#7cb8ff'
            }}>
              <span style={{
                display: 'inline-block',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: syncStatus === 'synced' ? '#00bc8c' : syncStatus === 'error' ? '#ff6b6b' : '#7cb8ff',
                animation: syncStatus === 'syncing' ? 'pulse 1.5s infinite' : 'none'
              }} />
              {syncStatus === 'synced' ? 'Live' : syncStatus === 'syncing' ? 'Syncing...' : 'Error'}
            </div>
          </div>
          {lastUpdated && (
            <p style={{
              fontSize: '0.875rem',
              color: 'rgba(124, 184, 255, 0.8)',
              marginTop: '0.5rem'
            }}>
              Last update: {lastUpdated}
            </p>
          )}
        </div>

        {/* Stats Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          {Object.entries(vocations).map(([vocation, icon]) => {
            const count = onlinePlayers.filter(p => p.vocation === vocation).length;
            return (
              <div key={vocation} style={{
                background: 'rgba(20, 20, 30, 0.8)',
                border: '1px solid rgba(124, 184, 255, 0.2)',
                borderRadius: '12px',
                padding: '1.5rem',
                textAlign: 'center'
              }}>
                <p style={{
                  fontSize: '2rem',
                  marginBottom: '0.5rem'
                }}>
                  {icon}
                </p>
                <p style={{
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: '#7cb8ff',
                  marginBottom: '0.25rem'
                }}>
                  {count}
                </p>
                <p style={{
                  fontSize: '0.875rem',
                  color: 'rgba(255, 255, 255, 0.6)'
                }}>
                  {vocation}s
                </p>
              </div>
            );
          })}
        </div>

        {/* Players List */}
        <div style={{
          background: 'rgba(20, 20, 30, 0.8)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(124, 184, 255, 0.2)',
          borderRadius: '12px',
          overflow: 'hidden'
        }}>
          {error && (
            <div style={{
              padding: '1rem',
              background: 'rgba(220, 53, 69, 0.1)',
              color: '#ff6b6b',
              fontSize: '0.875rem'
            }}>
              {error}
            </div>
          )}

          {loading ? (
            <div style={{
              padding: '3rem',
              textAlign: 'center',
              color: 'rgba(255, 255, 255, 0.5)'
            }}>
              Loading adventurers...
            </div>
          ) : onlinePlayers.length === 0 ? (
            <div style={{
              padding: '3rem',
              textAlign: 'center',
              color: 'rgba(255, 255, 255, 0.5)'
            }}>
              No adventurers online. Be the first!
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: '1rem',
              padding: '1rem'
            }}>
              {onlinePlayers.map((player) => (
                <Link
                  key={player.id}
                  href={`/evomanias/character/${player.id}`}
                  style={{
                    display: 'block',
                    background: 'rgba(124, 184, 255, 0.05)',
                    border: '1px solid rgba(124, 184, 255, 0.2)',
                    borderRadius: '8px',
                    padding: '1rem',
                    textDecoration: 'none',
                    color: 'white',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(124, 184, 255, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(124, 184, 255, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(124, 184, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(124, 184, 255, 0.2)';
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'start',
                    marginBottom: '0.5rem'
                  }}>
                    <h3 style={{
                      fontSize: '1rem',
                      fontWeight: '700',
                      color: '#7cb8ff',
                      margin: 0
                    }}>
                      {player.name}
                    </h3>
                    <span style={{
                      display: 'inline-block',
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: '#00bc8c'
                    }} />
                  </div>
                  <p style={{
                    fontSize: '0.875rem',
                    color: 'rgba(255, 255, 255, 0.6)',
                    margin: '0 0 0.5rem 0'
                  }}>
                    {vocations[player.vocation] || '⚔️'} {player.vocation}
                  </p>
                  <p style={{
                    fontSize: '0.875rem',
                    color: 'rgba(255, 255, 255, 0.7)',
                    margin: 0
                  }}>
                    Level {player.level}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>

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

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </main>
  );
}
