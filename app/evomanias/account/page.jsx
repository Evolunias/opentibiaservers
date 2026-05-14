'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEvomaniasAuth } from '../../context/EvomaniasAuthContext';

export default function EvomaniasAccount() {
  const router = useRouter();
  const { account, logout } = useEvomaniasAuth();
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [characterForm, setCharacterForm] = useState({
    name: '',
    vocation: 'Knight',
  });
  const [createError, setCreateError] = useState('');
  const [createLoading, setCreateLoading] = useState(false);

  useEffect(() => {
    if (!account) {
      router.push('/evomanias/login');
    } else {
      loadCharacters();
    }
  }, [account, router]);

  const loadCharacters = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/evomanias/characters?action=list&accountId=${account.id}`);
      const data = await response.json();
      setCharacters(data.characters || []);
    } catch (error) {
      console.error('Error loading characters:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateCharacter = async (e) => {
    e.preventDefault();
    setCreateError('');
    setCreateLoading(true);

    try {
      const response = await fetch('/api/evomanias/characters', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'create',
          accountId: account.id,
          name: characterForm.name,
          vocation: characterForm.vocation,
        }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error);

      setCharacters([...characters, data.character]);
      setCharacterForm({ name: '', vocation: 'Knight' });
      setShowCreateModal(false);
    } catch (error) {
      setCreateError(error.message || 'Failed to create character');
    } finally {
      setCreateLoading(false);
    }
  };

  if (loading) {
    return (
      <main style={{
        minHeight: '100vh',
        color: 'white',
        padding: '3rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <p>Loading your account...</p>
      </main>
    );
  }

  if (!account) {
    return null;
  }

  const handleSignOut = () => {
    logout();
    router.push('/evomanias');
  };

  return (
    <main style={{
      color: 'white',
      padding: '3rem 1.5rem'
    }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
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
              My Account
            </h1>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Manage your Evomanias account and characters
            </p>
          </div>

          {/* Content */}
          <div style={{ padding: '2rem' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginBottom: '2rem'
            }}>
              {/* Account Info */}
              <div>
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  color: 'white'
                }}>
                  Account Information
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{
                    background: 'rgba(124, 184, 255, 0.1)',
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(124, 184, 255, 0.2)'
                  }}>
                    <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.6)' }}>Email</p>
                    <p style={{ fontSize: '1rem', fontWeight: '600', color: 'white' }}>{account.email}</p>
                  </div>
                  <div style={{
                    background: 'rgba(124, 184, 255, 0.1)',
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(124, 184, 255, 0.2)'
                  }}>
                    <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.6)' }}>Account Name</p>
                    <p style={{ fontSize: '1rem', fontWeight: '600', color: 'white' }}>{account.name}</p>
                  </div>
                  <div style={{
                    background: 'rgba(16, 185, 129, 0.1)',
                    padding: '1rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(16, 185, 129, 0.2)'
                  }}>
                    <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.6)' }}>Account Status</p>
                    <p style={{ fontSize: '1rem', fontWeight: '600', color: '#10b981' }}>Active</p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div>
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  color: 'white'
                }}>
                  Quick Stats
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1rem'
                }}>
                  <div style={{
                    background: 'rgba(124, 184, 255, 0.1)',
                    border: '1px solid rgba(124, 184, 255, 0.3)',
                    padding: '1rem',
                    borderRadius: '8px'
                  }}>
                    <p style={{ fontSize: '0.875rem', color: '#7cb8ff', fontWeight: '600' }}>Characters</p>
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#7cb8ff' }}>{characters.length}</p>
                  </div>
                  <div style={{
                    background: 'rgba(124, 184, 255, 0.1)',
                    border: '1px solid rgba(124, 184, 255, 0.3)',
                    padding: '1rem',
                    borderRadius: '8px'
                  }}>
                    <p style={{ fontSize: '0.875rem', color: '#7cb8ff', fontWeight: '600' }}>Total Level</p>
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#7cb8ff' }}>
                      {characters.reduce((sum, c) => sum + (c.level || 1), 0)}
                    </p>
                  </div>
                  <div style={{
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    padding: '1rem',
                    borderRadius: '8px'
                  }}>
                    <p style={{ fontSize: '0.875rem', color: '#10b981', fontWeight: '600' }}>World</p>
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#10b981' }}>Evomanias</p>
                  </div>
                  <div style={{
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    padding: '1rem',
                    borderRadius: '8px'
                  }}>
                    <p style={{ fontSize: '0.875rem', color: '#10b981', fontWeight: '600' }}>Status</p>
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#10b981' }}>Online</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Characters Section */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '1rem'
              }}>
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: 'white'
                }}>
                  Your Characters
                </h2>
                <button
                  onClick={() => setShowCreateModal(true)}
                  style={{
                    background: 'linear-gradient(135deg, #7cb8ff 0%, #5a9fe6 100%)',
                    color: 'white',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    fontWeight: '600',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    transition: 'opacity 0.3s'
                  }}
                  onMouseEnter={(e) => (e.target.style.opacity = '0.9')}
                  onMouseLeave={(e) => (e.target.style.opacity = '1')}
                >
                  + Create Character
                </button>
              </div>

              {characters.length === 0 ? (
                <div style={{
                  background: 'rgba(0, 0, 0, 0.2)',
                  borderRadius: '8px',
                  padding: '2rem',
                  textAlign: 'center',
                  border: '2px dashed rgba(124, 184, 255, 0.3)'
                }}>
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    marginBottom: '1rem'
                  }}>
                    You don't have any characters yet.
                  </p>
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.5)',
                    fontSize: '0.875rem'
                  }}>
                    Create your first character to begin your adventure in Evomanias.
                  </p>
                </div>
              ) : (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                  gap: '1rem'
                }}>
                  {characters.map((char) => (
                    <Link
                      key={char.id}
                      href={`/evomanias/character/${char.id}`}
                      style={{
                        background: 'linear-gradient(135deg, rgba(124, 184, 255, 0.1) 0%, rgba(90, 159, 230, 0.05) 100%)',
                        border: '1px solid rgba(124, 184, 255, 0.3)',
                        padding: '1.5rem',
                        borderRadius: '8px',
                        transition: 'all 0.3s',
                        cursor: 'pointer',
                        textDecoration: 'none',
                        color: 'white',
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(124, 184, 255, 0.6)';
                        e.currentTarget.style.background = 'linear-gradient(135deg, rgba(124, 184, 255, 0.15) 0%, rgba(90, 159, 230, 0.08) 100%)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(124, 184, 255, 0.3)';
                        e.currentTarget.style.background = 'linear-gradient(135deg, rgba(124, 184, 255, 0.1) 0%, rgba(90, 159, 230, 0.05) 100%)';
                      }}
                    >
                      <h3 style={{
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        marginBottom: '0.5rem',
                        color: '#7cb8ff'
                      }}>
                        {char.name}
                      </h3>
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.25rem',
                        fontSize: '0.875rem',
                        color: 'rgba(255, 255, 255, 0.7)',
                        marginBottom: '1rem'
                      }}>
                        <p>Level <span style={{ fontWeight: '600', color: 'white' }}>{char.level || 1}</span></p>
                        <p>Vocation <span style={{ fontWeight: '600', color: 'white' }}>{char.vocation}</span></p>
                        <p>Experience <span style={{ fontWeight: '600', color: 'white' }}>{(char.experience || 0).toLocaleString()}</span></p>
                      </div>
                      <p style={{
                        fontSize: '0.75rem',
                        color: 'rgba(255, 255, 255, 0.5)'
                      }}>
                        Click to view details
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Create Character Modal */}
            {showCreateModal && (
              <div style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0, 0, 0, 0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 50,
                padding: '1rem'
              }}>
                <div style={{
                  background: 'rgba(20, 20, 25, 0.95)',
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                  maxWidth: '28rem',
                  width: '100%',
                  padding: '2rem',
                  border: '1px solid rgba(124, 184, 255, 0.2)'
                }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: 'white',
                    marginBottom: '1rem'
                  }}>
                    Create Character
                  </h3>

                  {createError && (
                    <div style={{
                      background: 'rgba(239, 68, 68, 0.1)',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      color: '#ff6b6b',
                      padding: '1rem',
                      borderRadius: '8px',
                      marginBottom: '1rem',
                      fontSize: '0.875rem'
                    }}>
                      {createError}
                    </div>
                  )}

                  <form onSubmit={handleCreateCharacter} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        color: 'rgba(255, 255, 255, 0.8)',
                        marginBottom: '0.5rem'
                      }}>
                        Character Name
                      </label>
                      <input
                        type="text"
                        value={characterForm.name}
                        onChange={(e) => setCharacterForm({ ...characterForm, name: e.target.value })}
                        placeholder="Enter character name"
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
                        required
                        disabled={createLoading}
                      />
                    </div>
                    <div>
                      <label style={{
                        display: 'block',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        color: 'rgba(255, 255, 255, 0.8)',
                        marginBottom: '0.5rem'
                      }}>
                        Choose Your Class
                      </label>
                      <select
                        value={characterForm.vocation}
                        onChange={(e) => setCharacterForm({ ...characterForm, vocation: e.target.value })}
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
                        disabled={createLoading}
                      >
                        <option value="Knight">🗡️ Knight - Master of defense and combat</option>
                        <option value="Paladin">🏹 Paladin - Balance magic and melee</option>
                        <option value="Druid">🌿 Druid - Master of nature and healing</option>
                        <option value="Sorcerer">⚡ Sorcerer - Master of spells</option>
                      </select>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      <button
                        type="submit"
                        disabled={createLoading}
                        style={{
                          flex: 1,
                          background: 'linear-gradient(135deg, #7cb8ff 0%, #5a9fe6 100%)',
                          color: 'white',
                          padding: '0.75rem 1rem',
                          borderRadius: '8px',
                          fontWeight: '600',
                          border: 'none',
                          cursor: createLoading ? 'not-allowed' : 'pointer',
                          opacity: createLoading ? 0.6 : 1,
                          transition: 'all 0.3s'
                        }}
                      >
                        {createLoading ? 'Creating...' : 'Create'}
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowCreateModal(false)}
                        disabled={createLoading}
                        style={{
                          flex: 1,
                          background: 'rgba(255, 255, 255, 0.1)',
                          color: 'white',
                          padding: '0.75rem 1rem',
                          borderRadius: '8px',
                          fontWeight: '600',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                          cursor: createLoading ? 'not-allowed' : 'pointer',
                          opacity: createLoading ? 0.6 : 1,
                          transition: 'all 0.3s'
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Navigation Links */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              <Link
                href="/evomanias/highscores"
                style={{
                  background: 'rgba(124, 184, 255, 0.1)',
                  border: '1px solid rgba(124, 184, 255, 0.3)',
                  padding: '1rem',
                  borderRadius: '8px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  color: 'white',
                  transition: 'all 0.3s'
                }}
              >
                <p style={{ fontWeight: '600', color: '#7cb8ff' }}>View Highscores</p>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.6)' }}>See the top players</p>
              </Link>
              <Link
                href="/evomanias"
                style={{
                  background: 'rgba(124, 184, 255, 0.1)',
                  border: '1px solid rgba(124, 184, 255, 0.3)',
                  padding: '1rem',
                  borderRadius: '8px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  color: 'white',
                  transition: 'all 0.3s'
                }}
              >
                <p style={{ fontWeight: '600', color: '#7cb8ff' }}>Return to Home</p>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.6)' }}>Back to main page</p>
              </Link>
              <button
                onClick={handleSignOut}
                style={{
                  background: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  padding: '1rem',
                  borderRadius: '8px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  color: 'white',
                  transition: 'all 0.3s'
                }}
              >
                <p style={{ fontWeight: '600', color: '#ff6b6b' }}>Sign Out</p>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.6)' }}>Exit your account</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
