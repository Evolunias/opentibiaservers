'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const vocations = ['All', 'Knight', 'Sorcerer', 'Cleric', 'Ranger', 'Paladin'];

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
    <main style={{ color: 'white', padding: '3rem 1.5rem' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div style={{
          background: 'rgba(20, 20, 25, 0.85)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
        }}>
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(124, 184, 255, 0.15) 0%, rgba(90, 159, 230, 0.1) 100%)',
            borderBottom: '1px solid rgba(124, 184, 255, 0.2)',
            padding: '2rem'
          }}>
            <h1 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              background: 'linear-gradient(135deg, #7cb8ff 0%, #5a9fe6 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Highscores
            </h1>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Top players in Evomanias
            </p>
          </div>

          {/* Filters */}
          <div style={{
            background: 'rgba(0, 0, 0, 0.2)',
            borderBottom: '1px solid rgba(124, 184, 255, 0.2)',
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
                  color: 'rgba(255, 255, 255, 0.8)',
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
                    background: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(124, 184, 255, 0.2)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '0.875rem',
                    outline: 'none'
                  }}
                />
              </div>

              {/* Vocation Filter */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: 'rgba(255, 255, 255, 0.8)',
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
                    background: 'rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(124, 184, 255, 0.2)',
                    borderRadius: '8px',
                    color: 'white',
                    fontSize: '0.875rem',
                    outline: 'none'
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
                      background: 'rgba(124, 184, 255, 0.1)',
                      borderBottom: '1px solid rgba(124, 184, 255, 0.2)'
                    }}>
                      <th style={{
                        padding: '1rem',
                        textAlign: 'left',
                        fontWeight: '700',
                        color: '#7cb8ff',
                        fontSize: '0.875rem'
                      }}>
                        Rank
                      </th>
                      <th style={{
                        padding: '1rem',
                        textAlign: 'left',
                        fontWeight: '700',
                        color: '#7cb8ff',
                        fontSize: '0.875rem'
                      }}>
                        Character
                      </th>
                      <th style={{
                        padding: '1rem',
                        textAlign: 'left',
                        fontWeight: '700',
                        color: '#7cb8ff',
                        fontSize: '0.875rem'
                      }}>
                        Vocation
                      </th>
                      <th style={{
                        padding: '1rem',
                        textAlign: 'left',
                        fontWeight: '700',
                        color: '#7cb8ff',
                        fontSize: '0.875rem'
                      }}>
                        Level
                      </th>
                      <th style={{
                        padding: '1rem',
                        textAlign: 'left',
                        fontWeight: '700',
                        color: '#7cb8ff',
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
                          borderBottom: '1px solid rgba(124, 184, 255, 0.1)',
                          background: idx % 2 === 0 ? 'transparent' : 'rgba(124, 184, 255, 0.02)',
                          transition: 'background 0.3s'
                        }}
                      >
                        <td style={{
                          padding: '1rem',
                          fontWeight: '700',
                          color: idx === 0 ? '#ffd700' : '#7cb8ff',
                          fontSize: '0.875rem'
                        }}>
                          {idx === 0 ? '👑' : idx + 1}
                        </td>
                        <td style={{
                          padding: '1rem',
                          fontSize: '0.875rem'
                        }}>
                          <Link href={`/evomanias/character/${entry.id}`} style={{
                            color: '#7cb8ff',
                            textDecoration: 'none'
                          }}>
                            {entry.name}
                          </Link>
                        </td>
                        <td style={{
                          padding: '1rem',
                          fontSize: '0.875rem'
                        }}>
                          {entry.vocation}
                        </td>
                        <td style={{
                          padding: '1rem',
                          fontSize: '0.875rem',
                          fontWeight: '600'
                        }}>
                          {entry.level || 1}
                        </td>
                        <td style={{
                          padding: '1rem',
                          fontSize: '0.875rem',
                          color: 'rgba(255, 255, 255, 0.7)'
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
                  background: 'rgba(0, 0, 0, 0.2)',
                  color: 'rgba(255, 255, 255, 0.6)'
                }}>
                  No highscores match your filters
                </div>
              )}
            </>
          )}

          {/* Footer Navigation */}
          <div style={{
            background: 'rgba(0, 0, 0, 0.2)',
            borderTop: '1px solid rgba(124, 184, 255, 0.2)',
            padding: '1.5rem',
            display: 'flex',
            justifyContent: 'space-between',
            gap: '1rem'
          }}>
            <Link
              href="/evomanias"
              style={{
                color: '#7cb8ff',
                fontWeight: '600',
                textDecoration: 'none'
              }}
            >
              ← Back to Home
            </Link>
            <Link
              href="/evomanias/account"
              style={{
                color: '#7cb8ff',
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
