'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const vocations = ['All', 'Knight', 'Paladin', 'Sorcerer', 'Druid'];

export default function Highscores() {
  const [highscores, setHighscores] = useState([]);
  const [selectedVocation, setSelectedVocation] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadHighscores();
  }, [selectedVocation, searchTerm]);

  const loadHighscores = async () => {
    setLoading(true);
    try {
      let query = '/api/evomanias/characters?action=highscores';
      if (selectedVocation !== 'All') {
        query += `&vocation=${selectedVocation}`;
      }

      const response = await fetch(query);
      const data = await response.json();
      
      let results = data.characters || [];
      
      if (searchTerm) {
        results = results.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase()));
      }
      
      setHighscores(results);
    } catch (error) {
      console.error('Error loading highscores:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ color: 'var(--text-primary)', padding: '3rem 1.5rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div style={{
          background: 'var(--bg-card)',
          backdropFilter: 'blur(12px)',
          border: '1px solid var(--border-light)',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
        }}>
          {/* Header */}
          <div style={{
            background: 'var(--bg-header)',
            borderBottom: '1px solid var(--border-primary)',
            padding: '2rem'
          }}>
            <h1 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Highscores
            </h1>
            <p style={{ color: 'var(--text-muted)' }}>
              Top players in Evomanias
            </p>
          </div>

          {/* Filters */}
          <div style={{
            background: 'var(--bg-filter)',
            borderBottom: '1px solid var(--border-primary)',
            padding: '1.5rem'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem'
            }}>
              {/* Search */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: 'var(--text-label)',
                  marginBottom: '0.5rem'
                }}>
                  Search Character
                </label>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by character name..."
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: 'var(--bg-input)',
                    border: '1px solid var(--border-primary)',
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    fontSize: '0.875rem',
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.background = 'var(--bg-input-hover)';
                    e.target.style.borderColor = 'var(--primary)';
                  }}
                  onBlur={(e) => {
                    e.target.style.background = 'var(--bg-input)';
                    e.target.style.borderColor = 'var(--border-primary)';
                  }}
                />
              </div>

              {/* Vocation Filter */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: 'var(--text-label)',
                  marginBottom: '0.5rem'
                }}>
                  Vocation
                </label>
                <select
                  value={selectedVocation}
                  onChange={(e) => setSelectedVocation(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    background: 'var(--bg-input)',
                    border: '1px solid var(--border-primary)',
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    fontSize: '0.875rem',
                    outline: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onFocus={(e) => {
                    e.target.style.background = 'var(--bg-input-hover)';
                    e.target.style.borderColor = 'var(--primary)';
                  }}
                  onBlur={(e) => {
                    e.target.style.background = 'var(--bg-input)';
                    e.target.style.borderColor = 'var(--border-primary)';
                  }}
                >
                  {vocations.map(voc => (
                    <option key={voc} value={voc}>{voc}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '3rem'
            }}>
              <p>Loading highscores...</p>
            </div>
          )}

          {/* Highscores Table */}
          {!loading && (
            <>
              <div style={{ overflowX: 'auto' }}>
                <table style={{
                  width: '100%',
                  borderCollapse: 'collapse'
                }}>
                  <thead>
                    <tr style={{
                      background: `rgba(var(--primary-rgb), 0.1)`,
                      borderBottom: '1px solid var(--border-primary)'
                    }}>
                      <th style={{
                        padding: '1rem',
                        textAlign: 'left',
                        fontWeight: '700',
                        color: 'var(--primary)',
                        fontSize: '0.875rem'
                      }}>
                        Rank
                      </th>
                      <th style={{
                        padding: '1rem',
                        textAlign: 'left',
                        fontWeight: '700',
                        color: 'var(--primary)',
                        fontSize: '0.875rem'
                      }}>
                        Character
                      </th>
                      <th style={{
                        padding: '1rem',
                        textAlign: 'left',
                        fontWeight: '700',
                        color: 'var(--primary)',
                        fontSize: '0.875rem'
                      }}>
                        Vocation
                      </th>
                      <th style={{
                        padding: '1rem',
                        textAlign: 'left',
                        fontWeight: '700',
                        color: 'var(--primary)',
                        fontSize: '0.875rem'
                      }}>
                        Level
                      </th>
                      <th style={{
                        padding: '1rem',
                        textAlign: 'left',
                        fontWeight: '700',
                        color: 'var(--primary)',
                        fontSize: '0.875rem'
                      }}>
                        Experience
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {highscores.map((entry, idx) => (
                      <tr
                        key={entry.id}
                        style={{
                          borderBottom: '1px solid var(--border-light)',
                          background: idx % 2 === 0 ? 'transparent' : `rgba(var(--primary-rgb), 0.02)`,
                          transition: 'background 0.3s'
                        }}
                      >
                        <td style={{
                          padding: '1rem',
                          fontWeight: '700',
                          color: idx === 0 ? '#ffd700' : 'var(--primary)',
                          fontSize: '0.875rem'
                        }}>
                          {idx === 0 ? '👑' : idx + 1}
                        </td>
                        <td style={{
                          padding: '1rem',
                          fontSize: '0.875rem'
                        }}>
                          <Link href={`/evomanias/character/${entry.id}`} style={{
                            color: 'var(--primary)',
                            textDecoration: 'none'
                          }}>
                            {entry.name}
                          </Link>
                        </td>
                        <td style={{
                          padding: '1rem',
                          fontSize: '0.875rem',
                          color: 'var(--text-secondary)'
                        }}>
                          {entry.vocation}
                        </td>
                        <td style={{
                          padding: '1rem',
                          fontSize: '0.875rem',
                          fontWeight: '600',
                          color: 'var(--text-secondary)'
                        }}>
                          {entry.level || 1}
                        </td>
                        <td style={{
                          padding: '1rem',
                          fontSize: '0.875rem',
                          color: 'var(--text-muted)'
                        }}>
                          {(entry.experience || 0).toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {highscores.length === 0 && (
                <div style={{
                  textAlign: 'center',
                  padding: '3rem',
                  background: 'var(--bg-filter)',
                  color: 'var(--text-muted)'
                }}>
                  No highscores match your filters
                </div>
              )}
            </>
          )}

          {/* Footer Navigation */}
          <div style={{
            background: 'var(--bg-filter)',
            borderTop: '1px solid var(--border-primary)',
            padding: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            gap: '1rem'
          }}>
            <Link
              href="/evomanias"
              style={{
                color: 'var(--primary)',
                fontWeight: '600',
                textDecoration: 'none'
              }}
            >
              Back to Home
            </Link>
            <Link
              href="/evomanias/account"
              style={{
                color: 'var(--primary)',
                fontWeight: '600',
                textDecoration: 'none'
              }}
            >
              My Account →
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
