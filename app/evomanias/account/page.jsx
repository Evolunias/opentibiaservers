'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEvomaniasAuth } from '../../context/EvomaniasAuthContext';
import { useEvomaniasTheme } from '../context/EvomaniasThemeContext';

export default function EvomaniasAccount() {
  const router = useRouter();
  const { account, logout } = useEvomaniasAuth();
  const { theme } = useEvomaniasTheme();
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [characterForm, setCharacterForm] = useState({
    name: '',
    vocation: 'Knight',
  });
  const [createError, setCreateError] = useState('');
  const [createLoading, setCreateLoading] = useState(false);

  const isDark = theme === 'dark';

  const colors = {
    bg: isDark ? 'rgba(20, 20, 25, 0.85)' : 'rgba(255, 255, 255, 0.95)',
    bgHover: isDark ? 'rgba(30, 30, 35, 0.85)' : 'rgba(240, 240, 245, 0.95)',
    bgLight: isDark ? 'rgba(124, 184, 255, 0.1)' : 'rgba(124, 184, 255, 0.05)',
    text: isDark ? 'white' : '#1f2937',
    textMuted: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(75, 85, 99, 0.6)',
    textLight: isDark ? 'rgba(255, 255, 255, 0.7)' : 'rgba(75, 85, 99, 0.7)',
    border: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(124, 184, 255, 0.2)',
    borderLight: isDark ? '1px solid rgba(124, 184, 255, 0.2)' : '1px solid rgba(124, 184, 255, 0.15)',
    input: isDark ? 'rgba(0, 0, 0, 0.3)' : 'rgba(240, 240, 245, 0.8)',
    inputBorder: isDark ? 'rgba(124, 184, 255, 0.2)' : 'rgba(124, 184, 255, 0.3)',
    modal: isDark ? 'rgba(20, 20, 25, 0.95)' : 'rgba(255, 255, 255, 0.98)',
    modalOverlay: isDark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.5)',
    empty: isDark ? 'rgba(0, 0, 0, 0.2)' : 'rgba(124, 184, 255, 0.08)',
    accent: '#7cb8ff',
    accentSecond: '#5a9fe6',
    success: '#10b981'
  };

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
          world: 'Evomanias',
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
        color: colors.text,
        background: isDark ? 'rgb(15, 15, 18)' : '#f9fafb',
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
      color: colors.text,
      padding: '3rem 1.5rem',
      background: isDark ? 'rgb(15, 15, 18)' : '#f9fafb',
      minHeight: '100vh'
    }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        <div style={{
          background: colors.bg,
          backdropFilter: 'blur(12px)',
          border: `1px solid ${colors.border}`,
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: isDark ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.08)'
        }}>
          {/* Header */}
          <div style={{
            background: isDark
              ? 'linear-gradient(135deg, rgba(124, 184, 255, 0.15) 0%, rgba(90, 159, 230, 0.1) 100%)'
              : 'linear-gradient(135deg, rgba(124, 184, 255, 0.08) 0%, rgba(90, 159, 230, 0.05) 100%)',
            borderBottom: `1px solid ${colors.border}`,
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
            <p style={{ color: colors.textLight }}>
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
                  color: colors.text
                }}>
                  Account Information
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{
                    background: colors.bgLight,
                    padding: '1rem',
                    borderRadius: '8px',
                    border: colors.borderLight
                  }}>
                    <p style={{ fontSize: '0.875rem', color: colors.textMuted }}>Email</p>
                    <p style={{ fontSize: '1rem', fontWeight: '600', color: colors.text }}>{account.email}</p>
                  </div>
                  <div style={{
                    background: colors.bgLight,
                    padding: '1rem',
                    borderRadius: '8px',
                    border: colors.borderLight
                  }}>
                    <p style={{ fontSize: '0.875rem', color: colors.textMuted }}>Account Name</p>
                    <p style={{ fontSize: '1rem', fontWeight: '600', color: colors.text }}>{account.name}</p>
                  </div>
                  <div style={{
                    background: isDark ? 'rgba(16, 185, 129, 0.1)' : 'rgba(16, 185, 129, 0.05)',
                    padding: '1rem',
                    borderRadius: '8px',
                    border: isDark ? '1px solid rgba(16, 185, 129, 0.2)' : '1px solid rgba(16, 185, 129, 0.3)'
                  }}>
                    <p style={{ fontSize: '0.875rem', color: colors.textMuted }}>Account Status</p>
                    <p style={{ fontSize: '1rem', fontWeight: '600', color: colors.success }}>Active</p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div>
                <h2 style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  color: colors.text
                }}>
                  Quick Stats
                </h2>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1rem'
                }}>
                  <div style={{
                    background: colors.bgLight,
                    border: colors.borderLight,
                    padding: '1rem',
                    borderRadius: '8px'
                  }}>
                    <p style={{ fontSize: '0.875rem', color: colors.accent, fontWeight: '600' }}>Characters</p>
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: colors.accent }}>{characters.length}</p>
                  </div>
                  <div style={{
                    background: colors.bgLight,
                    border: colors.borderLight,
                    padding: '1rem',
                    borderRadius: '8px'
                  }}>
                    <p style={{ fontSize: '0.875rem', color: colors.accent, fontWeight: '600' }}>Total Level</p>
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: colors.accent }}>
                      {characters.reduce((sum, c) => sum + (c.level || 1), 0)}
                    </p>
                  </div>
                  <div style={{
                    background: isDark ? 'rgba(16, 185, 129, 0.1)' : 'rgba(16, 185, 129, 0.05)',
                    border: isDark ? '1px solid rgba(16, 185, 129, 0.2)' : '1px solid rgba(16, 185, 129, 0.3)',
                    padding: '1rem',
                    borderRadius: '8px'
                  }}>
                    <p style={{ fontSize: '0.875rem', color: colors.success, fontWeight: '600' }}>World</p>
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: colors.success }}>Evomanias</p>
                  </div>
                  <div style={{
                    background: isDark ? 'rgba(16, 185, 129, 0.1)' : 'rgba(16, 185, 129, 0.05)',
                    border: isDark ? '1px solid rgba(16, 185, 129, 0.2)' : '1px solid rgba(16, 185, 129, 0.3)',
                    padding: '1rem',
                    borderRadius: '8px'
                  }}>
                    <p style={{ fontSize: '0.875rem', color: colors.success, fontWeight: '600' }}>Status</p>
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: colors.success }}>Online</p>
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
                  color: colors.text
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
                  background: colors.empty,
                  borderRadius: '8px',
                  padding: '2rem',
                  textAlign: 'center',
                  border: `2px dashed ${colors.border}`
                }}>
                  <p style={{
                    color: colors.textLight,
                    marginBottom: '1rem'
                  }}>
                    You don't have any characters yet.
                  </p>
                  <p style={{
                    color: colors.textMuted,
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
                        background: isDark
                          ? 'linear-gradient(135deg, rgba(124, 184, 255, 0.1) 0%, rgba(90, 159, 230, 0.05) 100%)'
                          : 'linear-gradient(135deg, rgba(124, 184, 255, 0.05) 0%, rgba(90, 159, 230, 0.02) 100%)',
                        border: colors.borderLight,
                        padding: '1.5rem',
                        borderRadius: '8px',
                        transition: 'all 0.3s',
                        cursor: 'pointer',
                        textDecoration: 'none',
                        color: colors.text,
                        display: 'flex',
                        flexDirection: 'column'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = isDark ? 'rgba(124, 184, 255, 0.6)' : 'rgba(124, 184, 255, 0.5)';
                        e.currentTarget.style.background = isDark
                          ? 'linear-gradient(135deg, rgba(124, 184, 255, 0.15) 0%, rgba(90, 159, 230, 0.08) 100%)'
                          : 'linear-gradient(135deg, rgba(124, 184, 255, 0.08) 0%, rgba(90, 159, 230, 0.04) 100%)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = colors.borderLight.split(' ')[1];
                        e.currentTarget.style.background = isDark
                          ? 'linear-gradient(135deg, rgba(124, 184, 255, 0.1) 0%, rgba(90, 159, 230, 0.05) 100%)'
                          : 'linear-gradient(135deg, rgba(124, 184, 255, 0.05) 0%, rgba(90, 159, 230, 0.02) 100%)';
                      }}
                    >
                      <h3 style={{
                        fontSize: '1.1rem',
                        fontWeight: 'bold',
                        marginBottom: '0.5rem',
                        color: colors.accent
                      }}>
                        {char.name}
                      </h3>
                      <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.25rem',
                        fontSize: '0.875rem',
                        color: colors.textLight,
                        marginBottom: '1rem'
                      }}>
                        <p>Level <span style={{ fontWeight: '600', color: colors.text }}>{char.level || 1}</span></p>
                        <p>Vocation <span style={{ fontWeight: '600', color: colors.text }}>{char.vocation}</span></p>
                        <p>Experience <span style={{ fontWeight: '600', color: colors.text }}>{(char.experience || 0).toLocaleString()}</span></p>
                      </div>
                      <p style={{
                        fontSize: '0.75rem',
                        color: colors.textMuted
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
                background: colors.modalOverlay,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 50,
                padding: '1rem'
              }}>
                <div style={{
                  background: colors.modal,
                  borderRadius: '12px',
                  boxShadow: isDark ? '0 4px 20px rgba(0, 0, 0, 0.5)' : '0 4px 20px rgba(0, 0, 0, 0.15)',
                  maxWidth: '28rem',
                  width: '100%',
                  padding: '2rem',
                  border: `1px solid ${colors.border}`
                }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: colors.text,
                    marginBottom: '1rem'
                  }}>
                    Create Character
                  </h3>

                  {createError && (
                    <div style={{
                      background: isDark ? 'rgba(239, 68, 68, 0.1)' : 'rgba(239, 68, 68, 0.08)',
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
                        color: colors.textLight,
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
                          background: colors.input,
                          border: colors.inputBorder,
                          borderRadius: '8px',
                          color: colors.text,
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
                        color: colors.textLight,
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
                          background: colors.input,
                          border: colors.inputBorder,
                          borderRadius: '8px',
                          color: colors.text,
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
                          background: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
                          color: colors.text,
                          padding: '0.75rem 1rem',
                          borderRadius: '8px',
                          fontWeight: '600',
                          border: isDark ? '1px solid rgba(255, 255, 255, 0.2)' : `1px solid ${colors.border}`,
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
                  background: colors.bgLight,
                  border: colors.borderLight,
                  padding: '1rem',
                  borderRadius: '8px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  color: colors.text,
                  transition: 'all 0.3s'
                }}
              >
                <p style={{ fontWeight: '600', color: colors.accent }}>View Highscores</p>
                <p style={{ fontSize: '0.875rem', color: colors.textMuted }}>See the top players</p>
              </Link>
              <Link
                href="/evomanias"
                style={{
                  background: colors.bgLight,
                  border: colors.borderLight,
                  padding: '1rem',
                  borderRadius: '8px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  color: colors.text,
                  transition: 'all 0.3s'
                }}
              >
                <p style={{ fontWeight: '600', color: colors.accent }}>Return to Home</p>
                <p style={{ fontSize: '0.875rem', color: colors.textMuted }}>Back to main page</p>
              </Link>
              <button
                onClick={handleSignOut}
                style={{
                  background: isDark ? 'rgba(239, 68, 68, 0.1)' : 'rgba(239, 68, 68, 0.08)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  padding: '1rem',
                  borderRadius: '8px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  color: colors.text,
                  transition: 'all 0.3s'
                }}
              >
                <p style={{ fontWeight: '600', color: '#ff6b6b' }}>Sign Out</p>
                <p style={{ fontSize: '0.875rem', color: colors.textMuted }}>Exit your account</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
