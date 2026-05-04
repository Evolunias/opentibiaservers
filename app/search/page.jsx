'use client';

import { Suspense } from 'react';
import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Search, Zap, Loader } from 'lucide-react';
import Link from 'next/link';
import { searchAndGroup, getSuggestedResults } from '@/app/lib/search-utils-client';

function SearchContent() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(false);
  const [suggested, setSuggested] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  // Initialize search from URL params and load suggested results on mount
  useEffect(() => {
    const queryParam = searchParams.get('q');
    if (queryParam) {
      setSearchTerm(queryParam);
    }
    getSuggestedResults(8).then(setSuggested);
  }, [searchParams]);

  // Search with debounce
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (searchTerm.trim()) {
        setLoading(true);
        const groupedResults = await searchAndGroup(searchTerm);
        setResults(groupedResults);
        setLoading(false);
      } else {
        setResults({});
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Get available categories from results
  const categories = useMemo(() => {
    return ['all', ...Object.keys(results).sort()];
  }, [results]);

  // Filter results by selected category
  const filteredResults = useMemo(() => {
    if (selectedFilter === 'all') return results;
    const filtered = {};
    if (results[selectedFilter]) {
      filtered[selectedFilter] = results[selectedFilter];
    }
    return filtered;
  }, [results, selectedFilter]);

  const getResultIcon = (category) => {
    switch(category) {
      case 'Spell': return '✨';
      case 'Creature': return '⚔️';
      case 'Item': return '🛡️';
      case 'Feature': return '⚙️';
      case 'News': return '📰';
      case 'Gallery': return '🖼️';
      case 'Boss': return '👹';
      case 'Cosmetic': return '👗';
      case 'Page': return '📖';
      default: return '🔍';
    }
  };

  const totalResults = Object.values(filteredResults).reduce((sum, cat) => sum + cat.length, 0);

  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <section className="content-section" style={{ paddingTop: '28px' }}>
        <div className="section-heading compact">
          <div>
            <span className="eyebrow">Find anything</span>
            <h2>Global search</h2>
            <p>Search across spells, creatures, items, features, news, and more.</p>
          </div>
        </div>

        <div className="search-shell" style={{ marginBottom: '28px' }} aria-label="Global wiki search">
          <Search className="h-5 w-5" />
          <input
            autoFocus
            type="text"
            placeholder="Search anything in the wiki..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'inherit',
              width: '100%',
              outline: 'none',
              fontSize: '1rem',
            }}
          />
          {loading && <Loader className="h-5 w-5" style={{ animation: 'spin 1s linear infinite' }} />}
        </div>

        {/* Category filters */}
        {searchTerm.trim() && Object.keys(results).length > 0 && (
          <div style={{ marginBottom: '24px', display: 'flex', gap: '8px', flexWrap: 'wrap', maxWidth: '100%', overflow: 'hidden' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                style={{
                  padding: '6px 12px',
                  borderRadius: '6px',
                  border: selectedFilter === cat ? '1px solid var(--primary)' : '1px solid var(--border)',
                  background: selectedFilter === cat ? 'var(--bg-hover)' : 'transparent',
                  color: 'inherit',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                  fontWeight: selectedFilter === cat ? 600 : 400,
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                {cat === 'all' ? 'All Results' : `${cat} (${results[cat]?.length || 0})`}
              </button>
            ))}
          </div>
        )}

        {selectedItem && (
          <div style={{ marginBottom: '40px', padding: '24px', borderRadius: '16px', border: '1px solid var(--line-strong)', background: 'linear-gradient(180deg, rgba(20, 24, 24, 0.96) 0%, rgba(15, 17, 17, 0.92) 100%)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '20px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'start', flex: 1 }}>
                <span style={{ fontSize: '2rem', flexShrink: 0 }}>{getResultIcon(selectedItem.category)}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h2 style={{ margin: '0 0 8px 0', fontSize: '1.8rem', wordBreak: 'break-word' }}>{selectedItem.name}</h2>
                  <p style={{ margin: '0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>{selectedItem.category}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  fontSize: '1.5rem',
                  padding: '4px 8px',
                  flexShrink: 0,
                }}
              >
                ✕
              </button>
            </div>

            {selectedItem.description && (
              <div style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px solid var(--line)' }}>
                <p style={{ margin: '0', color: 'var(--text-muted)', lineHeight: '1.6' }}>{selectedItem.description}</p>
              </div>
            )}

            {/* Cosmetic-specific info */}
            {selectedItem.category === 'Cosmetic' && (
              <div style={{ display: 'grid', gap: '16px', marginBottom: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                  {selectedItem.type && (
                    <div style={{ padding: '12px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px', border: '1px solid var(--line)' }}>
                      <span style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'capitalize' }}>Type</span>
                      <strong style={{ display: 'block', fontSize: '1.2rem' }}>{selectedItem.type}</strong>
                    </div>
                  )}
                  {selectedItem.obtained && (
                    <div style={{ padding: '12px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px', border: '1px solid var(--line)' }}>
                      <span style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.8rem' }}>Obtained From</span>
                      <strong style={{ display: 'block', fontSize: '1rem' }}>{selectedItem.obtained}</strong>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Item-specific stats */}
            {selectedItem.category === 'Item' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '20px' }}>
                {selectedItem.stats && Object.entries(selectedItem.stats).map(([key, value]) => (
                  <div key={key} style={{ padding: '12px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px', border: '1px solid var(--line)' }}>
                    <span style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'capitalize' }}>{key}</span>
                    <strong style={{ display: 'block', fontSize: '1.2rem' }}>{value}</strong>
                  </div>
                ))}
                {selectedItem.attack && (
                  <div style={{ padding: '12px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px', border: '1px solid var(--line)' }}>
                    <span style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.8rem' }}>Attack</span>
                    <strong style={{ display: 'block', fontSize: '1.2rem' }}>{selectedItem.attack}</strong>
                  </div>
                )}
                {selectedItem.defense && (
                  <div style={{ padding: '12px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px', border: '1px solid var(--line)' }}>
                    <span style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.8rem' }}>Defense</span>
                    <strong style={{ display: 'block', fontSize: '1.2rem' }}>{selectedItem.defense}</strong>
                  </div>
                )}
                {selectedItem.level_requirement && (
                  <div style={{ padding: '12px', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px', border: '1px solid var(--line)' }}>
                    <span style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.8rem' }}>Level Requirement</span>
                    <strong style={{ display: 'block', fontSize: '1.2rem' }}>{selectedItem.level_requirement}</strong>
                  </div>
                )}
              </div>
            )}

            {/* Cosmetic requirements */}
            {selectedItem.category === 'Cosmetic' && selectedItem.required && (
              <div style={{ marginBottom: '20px', padding: '14px', background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.1) 0%, rgba(251, 191, 36, 0.05) 100%)', borderRadius: '8px', border: '1px solid rgba(251, 191, 36, 0.3)' }}>
                <span style={{ display: 'block', color: 'var(--gold)', fontSize: '0.85rem', marginBottom: '10px', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.05em' }}>📦 Required Items</span>
                <p style={{ margin: '0', fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-muted)' }}>{selectedItem.required}</p>
              </div>
            )}

            {/* Metadata tags */}
            {(selectedItem.type || selectedItem.slot || selectedItem.tier || selectedItem.rarity) && selectedItem.category !== 'Cosmetic' && (
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {selectedItem.type && (
                  <span style={{ padding: '4px 10px', background: 'rgba(251, 191, 36, 0.15)', borderRadius: '6px', fontSize: '0.8rem', color: 'var(--gold)' }}>
                    {selectedItem.type}
                  </span>
                )}
                {selectedItem.slot && (
                  <span style={{ padding: '4px 10px', background: 'rgba(105, 117, 101, 0.2)', borderRadius: '6px', fontSize: '0.8rem', color: 'var(--green-strong)' }}>
                    {selectedItem.slot}
                  </span>
                )}
                {selectedItem.tier && (
                  <span style={{ padding: '4px 10px', background: 'rgba(135, 160, 125, 0.2)', borderRadius: '6px', fontSize: '0.8rem', color: 'var(--green)' }}>
                    {selectedItem.tier}
                  </span>
                )}
                {selectedItem.rarity && (
                  <span style={{ padding: '4px 10px', background: 'rgba(251, 191, 36, 0.1)', borderRadius: '6px', fontSize: '0.8rem', color: 'var(--gold)' }}>
                    {selectedItem.rarity}
                  </span>
                )}
              </div>
            )}
          </div>
        )}

        {searchTerm.trim() ? (
          loading ? (
            <div style={{ padding: '40px 20px', textAlign: 'center', color: 'var(--text-muted)' }}>
              <Loader style={{ width: '32px', height: '32px', margin: '0 auto 16px', animation: 'spin 1s linear infinite' }} />
              <p>Searching...</p>
            </div>
          ) : totalResults > 0 ? (
            <div style={{ display: 'grid', gap: '32px' }}>
              {Object.entries(filteredResults).map(([category, items]) => (
                <div key={category}>
                  <h3 style={{
                    fontSize: '0.9rem',
                    marginBottom: '16px',
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontWeight: 600
                  }}>
                    {category} ({items.length})
                  </h3>
                  <div style={{ display: 'grid', gap: '8px' }}>
                    {items.map((item) => (
                      <article
                        key={item.id}
                        className="panel"
                        onClick={() => setSelectedItem(item)}
                        style={{
                          padding: '14px 16px',
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          minWidth: 0,
                          overflow: 'hidden',
                          backgroundColor: selectedItem?.id === item.id ? 'var(--bg-hover)' : 'transparent',
                          borderColor: selectedItem?.id === item.id ? 'var(--line-strong)' : 'var(--line)',
                        }}
                        onMouseEnter={(e) => selectedItem?.id !== item.id && (e.currentTarget.style.backgroundColor = 'var(--bg-hover)')}
                        onMouseLeave={(e) => selectedItem?.id !== item.id && (e.currentTarget.style.backgroundColor = 'transparent')}
                      >
                        <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{getResultIcon(item.category)}</span>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <strong style={{ display: 'block', marginBottom: '2px', wordBreak: 'break-word' }}>{item.name}</strong>
                          {item.description && (
                            <span style={{
                              display: 'block',
                              fontSize: '0.8rem',
                              color: 'var(--text-muted)',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap'
                            }}>
                              {item.description}
                            </span>
                          )}
                          <div style={{ display: 'flex', gap: '12px', marginTop: '4px', flexWrap: 'wrap', minWidth: 0 }}>
                            {item.category === 'Cosmetic' && item.type && (
                              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', flexShrink: 0 }}>
                                {item.type}
                              </span>
                            )}
                            {item.category === 'Cosmetic' && item.obtained && (
                              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', flexShrink: 0 }}>
                                📍 {item.obtained}
                              </span>
                            )}
                            {item.category !== 'Cosmetic' && item.type && (
                              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', flexShrink: 0 }}>
                                {item.type}
                              </span>
                            )}
                            {item.slot && (
                              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', flexShrink: 0 }}>
                                {item.slot}
                              </span>
                            )}
                            {item.tier && (
                              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', flexShrink: 0 }}>
                                {item.tier}
                              </span>
                            )}
                            {item.rarity && (
                              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', flexShrink: 0 }}>
                                {item.rarity}
                              </span>
                            )}
                            {item.experience && (
                              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', flexShrink: 0, whiteSpace: 'nowrap' }}>
                                {item.experience.toLocaleString()} exp
                              </span>
                            )}
                            {item.level && (
                              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', flexShrink: 0, whiteSpace: 'nowrap' }}>
                                Level {item.level}
                              </span>
                            )}
                          </div>
                        </div>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', flexShrink: 0 }}>→</span>
                      </article>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{ padding: '40px 20px', textAlign: 'center', color: 'var(--text-muted)' }}>
              <Search style={{ width: '48px', height: '48px', margin: '0 auto 16px', opacity: '0.3' }} />
              <p>No results found for "{searchTerm}"</p>
              <p style={{ fontSize: '0.9rem' }}>Try different keywords or browse by category</p>
            </div>
          )
        ) : (
          <div style={{ display: 'grid', gap: '32px' }}>
            <div>
              <h3 style={{
                fontSize: '0.9rem',
                marginBottom: '16px',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Zap className="h-4 w-4" />
                Quick Access
              </h3>
              <div style={{ display: 'grid', gap: '8px' }}>
                {suggested.map((item) => (
                  <Link key={item.id} href={item.href} style={{ textDecoration: 'none', color: 'inherit', minWidth: 0 }}>
                    <article className="panel" style={{
                      padding: '14px 16px',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      minWidth: 0,
                      overflow: 'hidden',
                    }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--bg-hover)'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                      <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>{getResultIcon(item.category)}</span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <strong style={{ display: 'block', wordBreak: 'break-word' }}>{item.name}</strong>
                      </div>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', flexShrink: 0 }}>→</span>
                    </article>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h3 style={{
                fontSize: '0.9rem',
                marginBottom: '16px',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontWeight: 600
              }}>
                Search Tips
              </h3>
              <div style={{ display: 'grid', gap: '12px' }}>
                <div style={{ padding: '12px', background: 'var(--bg-secondary)', borderRadius: '8px' }}>
                  <p style={{ fontSize: '0.9rem', margin: '0 0 4px 0', fontWeight: 500 }}>Keyword matching</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>Search by spell name, creature type, item slot, cosmetic name, or feature name</p>
                </div>
                <div style={{ padding: '12px', background: 'var(--bg-secondary)', borderRadius: '8px' }}>
                  <p style={{ fontSize: '0.9rem', margin: '0 0 4px 0', fontWeight: 500 }}>Search by requirements</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>Find cosmetics needing specific items like "Gold Nuggets", "Dragon Claw", or "Star Coins"</p>
                </div>
                <div style={{ padding: '12px', background: 'var(--bg-secondary)', borderRadius: '8px' }}>
                  <p style={{ fontSize: '0.9rem', margin: '0 0 4px 0', fontWeight: 500 }}>Smart ranking</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>Results ranked by relevance - exact matches appear first</p>
                </div>
                <div style={{ padding: '12px', background: 'var(--bg-secondary)', borderRadius: '8px' }}>
                  <p style={{ fontSize: '0.9rem', margin: '0 0 4px 0', fontWeight: 500 }}>Browse by category</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>Once you search, filter results by type to narrow down to cosmetics, items, spells, etc.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </main>
  );
}

function SearchFallback() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <section className="content-section" style={{ paddingTop: '28px' }}>
        <div style={{ padding: '40px 20px', textAlign: 'center', color: 'var(--text-muted)' }}>
          <p>Loading search...</p>
        </div>
      </section>
    </main>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<SearchFallback />}>
      <SearchContent />
    </Suspense>
  );
}
