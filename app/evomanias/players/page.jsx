'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PlayersPage() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [vocationFilter, setVocationFilter] = useState('');
  const [lastUpdated, setLastUpdated] = useState(null);

  const vocations = {
    'Knight': '🗡️',
    'Paladin': '🏹',
    'Druid': '🌿',
    'Sorcerer': '⚡',
  };

  useEffect(() => {
    loadPlayers();
    
    // Real-time sync - refresh every 3 seconds
    const interval = setInterval(() => {
      loadPlayers();
    }, 3000);

    return () => clearInterval(interval);
  }, [vocationFilter]);

  const loadPlayers = async () => {
    try {
      setError(null);
      const url = vocationFilter 
        ? `/api/evomanias/characters?action=highscores&vocation=${vocationFilter}`
        : '/api/evomanias/characters?action=highscores';
      
      const response = await fetch(url);
      const data = await response.json();
      setPlayers(data.characters || []);
      setLastUpdated(new Date().toLocaleTimeString());
    } catch (err) {
      console.error('Error loading players:', err);
      setError('Unable to load player data');
    } finally {
      setLoading(false);
    }
  };

  const filteredPlayers = vocationFilter 
    ? players.filter(p => p.vocation === vocationFilter)
    : players;

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
            🏆 All Adventurers
          </h1>
          <p style={{
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '1rem'
          }}>
            Real-time player rankings and statistics
          </p>
          {lastUpdated && (
            <p style={{
              fontSize: '0.875rem',
              color: 'rgba(124, 184, 255, 0.8)'
            }}>
              Last updated: {lastUpdated}
            </p>
          )}
        </div>

        {/* Filter Controls */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          <button
            onClick={() => setVocationFilter('')}
            style={{
              padding: '0.75rem 1.5rem',
              background: vocationFilter === '' ? '#7cb8ff' : 'rgba(124, 184, 255, 0.2)',
              border: '1px solid rgba(124, 184, 255, 0.4)',
              color: 'white',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.3s'
            }}
          >
            All Classes
          </button>
          {Object.keys(vocations).map(vocation => (
            <button
              key={vocation}
              onClick={() => setVocationFilter(vocation)}
              style={{
                padding: '0.75rem 1.5rem',
                background: vocationFilter === vocation ? '#7cb8ff' : 'rgba(124, 184, 255, 0.2)',
                border: '1px solid rgba(124, 184, 255, 0.4)',
                color: 'white',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: '600',
                transition: 'all 0.3s'
              }}
            >
              {vocations[vocation]} {vocation}
            </button>
          ))}
        </div>

        {/* Players Table */}
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
          ) : filteredPlayers.length === 0 ? (
            <div style={{
              padding: '3rem',
              textAlign: 'center',
              color: 'rgba(255, 255, 255, 0.5)'
            }}>
              No adventurers found
            </div>
          ) : (
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
                  }}>Rank</th>
                  <th style={{
                    padding: '1rem',
                    textAlign: 'left',
                    fontWeight: '700',
                    color: '#7cb8ff',
                    fontSize: '0.875rem'
                  }}>Adventurer</th>
                  <th style={{
                    padding: '1rem',
                    textAlign: 'left',
                    fontWeight: '700',
                    color: '#7cb8ff',
                    fontSize: '0.875rem'
                  }}>Class</th>
                  <th style={{
                    padding: '1rem',
                    textAlign: 'right',
                    fontWeight: '700',
                    color: '#7cb8ff',
                    fontSize: '0.875rem'
                  }}>Level</th>
                  <th style={{
                    padding: '1rem',
                    textAlign: 'right',
                    fontWeight: '700',
                    color: '#7cb8ff',
                    fontSize: '0.875rem'
                  }}>Experience</th>
                </tr>
              </thead>
              <tbody>
                {filteredPlayers.map((player, idx) => (
                  <tr
                    key={player.id}
                    style={{
                      borderBottom: '1px solid rgba(124, 184, 255, 0.1)',
                      background: idx % 2 === 0 ? 'transparent' : 'rgba(124, 184, 255, 0.02)',
                      transition: 'background 0.3s'
                    }}
                  >
                    <td style={{
                      padding: '1rem',
                      fontSize: '0.875rem',
                      fontWeight: '700',
                      color: idx === 0 ? '#ffd700' : '#7cb8ff'
                    }}>
                      {idx === 0 ? '👑' : idx + 1}
                    </td>
                    <td style={{
                      padding: '1rem',
                      fontSize: '0.875rem'
                    }}>
                      <Link
                        href={`/evomanias/character/${player.id}`}
                        style={{
                          color: '#7cb8ff',
                          fontWeight: '600',
                          textDecoration: 'none'
                        }}
                      >
                        {player.name}
                      </Link>
                    </td>
                    <td style={{
                      padding: '1rem',
                      fontSize: '0.875rem'
                    }}>
                      {vocations[player.vocation] || '⚔️'} {player.vocation}
                    </td>
                    <td style={{
                      padding: '1rem',
                      fontSize: '0.875rem',
                      textAlign: 'right',
                      fontWeight: '600'
                    }}>
                      {player.level}
                    </td>
                    <td style={{
                      padding: '1rem',
                      fontSize: '0.875rem',
                      textAlign: 'right',
                      color: 'rgba(255, 255, 255, 0.7)'
                    }}>
                      {player.experience.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
    </main>
  );
}
