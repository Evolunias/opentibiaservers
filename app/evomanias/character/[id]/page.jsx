'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function CharacterDetail() {
  const params = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadCharacter();
  }, [params.id]);

  const loadCharacter = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/evomanias/characters?action=detail&characterId=${params.id}`);
      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Character not found');
      } else {
        setCharacter(data.character);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
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
        <p>Loading character...</p>
      </main>
    );
  }

  if (error || !character) {
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
            padding: '2rem',
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
          }}>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)', marginBottom: '1rem' }}>
              {error || 'Character not found'}
            </p>
            <Link href="/evomanias/highscores" style={{
              color: '#7cb8ff',
              fontWeight: '600',
              textDecoration: 'none'
            }}>
              Back to Highscores
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const vocations = {
    Knight: { color: 'from-red-500 to-red-600', icon: '⚔️' },
    Sorcerer: { color: 'from-purple-500 to-purple-600', icon: '🔮' },
    Cleric: { color: 'from-yellow-500 to-yellow-600', icon: '✨' },
    Ranger: { color: 'from-green-500 to-green-600', icon: '🏹' },
    Paladin: { color: 'from-blue-500 to-blue-600', icon: '⚡' },
  };

  const vocInfo = vocations[character.vocation] || vocations.Knight;

  return (
    <main style={{ color: 'white', padding: '3rem 1.5rem' }}>
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
            <Link href="/evomanias/highscores" style={{
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '0.875rem',
              display: 'inline-block',
              marginBottom: '1rem',
              textDecoration: 'none'
            }}>
              ← Back to Highscores
            </Link>
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>{vocInfo.icon}</div>
                <h1 style={{
                  fontSize: '2.25rem',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem',
                  background: 'linear-gradient(135deg, #7cb8ff 0%, #5a9fe6 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}>
                  {character.name}
                </h1>
                <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                  {character.vocation}
                </p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: 'bold',
                  color: '#7cb8ff'
                }}>
                  {character.level || 1}
                </div>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.6)' }}>Level</p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            padding: '2rem',
            borderBottom: '1px solid rgba(124, 184, 255, 0.2)'
          }}>
            <div style={{
              background: 'rgba(124, 184, 255, 0.1)',
              border: '1px solid rgba(124, 184, 255, 0.3)',
              padding: '1.5rem',
              borderRadius: '8px'
            }}>
              <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.6)', fontWeight: '600', marginBottom: '0.5rem' }}>
                Experience
              </p>
              <p style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#7cb8ff' }}>
                {(character.experience || 0).toLocaleString()}
              </p>
            </div>

            <div style={{
              background: 'rgba(124, 184, 255, 0.1)',
              border: '1px solid rgba(124, 184, 255, 0.3)',
              padding: '1.5rem',
              borderRadius: '8px'
            }}>
              <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.6)', fontWeight: '600', marginBottom: '0.5rem' }}>
                World
              </p>
              <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#7cb8ff' }}>
                {character.world || 'Evomanias'}
              </p>
            </div>

            <div style={{
              background: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              padding: '1.5rem',
              borderRadius: '8px'
            }}>
              <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.6)', fontWeight: '600', marginBottom: '0.5rem' }}>
                Status
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: character.status === 'active' ? '#10b981' : '#ef4444'
                }} />
                <p style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#10b981', textTransform: 'capitalize' }}>
                  {character.status || 'Active'}
                </p>
              </div>
            </div>

            <div style={{
              background: 'rgba(124, 184, 255, 0.1)',
              border: '1px solid rgba(124, 184, 255, 0.3)',
              padding: '1.5rem',
              borderRadius: '8px'
            }}>
              <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.6)', fontWeight: '600', marginBottom: '0.5rem' }}>
                Last Login
              </p>
              <p style={{ fontSize: '1rem', fontWeight: 'bold', color: '#7cb8ff' }}>
                {character.last_login
                  ? new Date(character.last_login).toLocaleDateString()
                  : 'Never'}
              </p>
            </div>
          </div>

          {/* Character Info */}
          <div style={{ padding: '2rem' }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              color: 'white'
            }}>
              Character Information
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem'
            }}>
              <div style={{
                borderLeft: '4px solid #7cb8ff',
                paddingLeft: '1rem'
              }}>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.6)', fontWeight: '600', marginBottom: '0.5rem' }}>
                  Created
                </p>
                <p style={{ fontSize: '1rem', fontWeight: 'bold', color: 'white' }}>
                  {character.created ? new Date(character.created).toLocaleDateString() : 'Unknown'}
                </p>
              </div>
              <div style={{
                borderLeft: '4px solid #7cb8ff',
                paddingLeft: '1rem'
              }}>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.6)', fontWeight: '600', marginBottom: '0.5rem' }}>
                  Experience Rate
                </p>
                <p style={{ fontSize: '1rem', fontWeight: 'bold', color: 'white' }}>1.0x (Default)</p>
              </div>
              <div style={{
                borderLeft: '4px solid #7cb8ff',
                paddingLeft: '1rem'
              }}>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.6)', fontWeight: '600', marginBottom: '0.5rem' }}>
                  Skill Rate
                </p>
                <p style={{ fontSize: '1rem', fontWeight: 'bold', color: 'white' }}>1.0x (Default)</p>
              </div>
              <div style={{
                borderLeft: '4px solid #7cb8ff',
                paddingLeft: '1rem'
              }}>
                <p style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.6)', fontWeight: '600', marginBottom: '0.5rem' }}>
                  Magic Level Rate
                </p>
                <p style={{ fontSize: '1rem', fontWeight: 'bold', color: 'white' }}>1.0x (Default)</p>
              </div>
            </div>
          </div>

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
              href="/evomanias/highscores"
              style={{
                color: '#7cb8ff',
                fontWeight: '600',
                textDecoration: 'none'
              }}
            >
              ← Highscores
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
