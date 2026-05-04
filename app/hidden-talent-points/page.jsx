'use client';

import { useState, useMemo } from 'react';

export default function HiddenTalentPointsPage() {
  const [expandedLocations, setExpandedLocations] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const locations = [
    {
      id: 'mirage-island',
      name: 'Mirage Island',
      region: 'tropical',
      difficulty: 'intermediate',
      points: 3,
      description: 'An enchanted island shrouded in mystical fog, where ancient magic resonates through every corner.',
      lore: 'Legend whispers of Mirage Island—a place where reality bends and illusions dance. Adventurers speak in hushed tones of the power hidden within its misty shores, protected by magical guardians and ancient puzzles.',
      rewards: [
        { stat: 'Damage', boost: '+15% Physical Damage' },
        { stat: 'Critical Hit Chance', boost: '+8% Critical Strike' },
        { stat: 'Agility', boost: '+10% Movement Speed' }
      ],
      challenges: [
        'Navigate through shifting illusions to find the true path',
        'Solve ancient riddles guarded by spirit guardians',
        'Overcome the Island\'s natural hazards and environmental puzzles'
      ],
      tips: [
        'Search for hidden passages behind waterfalls and rock formations',
        'Listen to the whispers of the island—they guide the worthy',
        'Bring protective gear for the island\'s unpredictable weather',
        'The treasure reveals itself only to those with pure determination'
      ],
      difficulty_description: 'Intermediate - Suitable for adventurers who have proven themselves in basic combat',
      images: [
        '/images/boss-raid-assets/hidden-talent-001.webp',
        '/images/boss-raid-assets/hidden-talent-002.webp',
        '/images/boss-raid-assets/hidden-talent-003.webp',
        '/images/boss-raid-assets/hidden-talent-004.webp',
        '/images/boss-raid-assets/hidden-talent-005.webp',
        '/images/boss-raid-assets/hidden-talent-006.webp'
      ],
      loot: {
        common: ['White Pearl', 'Small Sapphire', 'Small Diamond', 'Black Pearl', 'Small Emeralds'],
        uncommon: ['Platinum Coin', 'Golden Legs', 'Boots of Haste', 'Dragon Scale Mail', 'Leopard Armor', 'Dragon Shield'],
        rare: ['Firewalker Boots', 'Blue Legs', 'Dwarven Armor', 'Mage\'s Cap', 'Star Coins', 'Huge Chunk of Crude Iron', 'Nightmare Doll', 'Expedition Backpack'],
        legendary: ['Talent Token', 'Upgrade Stone']
      }
    }
  ];


  const difficulties = {
    beginner: { label: 'Beginner', color: '#90ee90', icon: '⭐' },
    intermediate: { label: 'Intermediate', color: '#ffd700', icon: '⭐⭐' },
    advanced: { label: 'Advanced', color: '#ff8c00', icon: '⭐⭐⭐' },
    expert: { label: 'Expert', color: '#ff6b6b', icon: '⭐⭐⭐⭐' }
  };

  const filteredLocations = useMemo(() => {
    return locations.filter(loc => {
      const matchesSearch = loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           loc.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesSearch;
    });
  }, [searchQuery]);

  const toggleLocation = (id) => {
    setExpandedLocations(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* Hero Section */}
      <section className="hero-grid">
        <div className="hero-copy panel hero-panel">
          <span className="eyebrow">Ancient Mysteries</span>
          <h1>Hidden Talent Points</h1>
          <p>
            Scattered across Evolisca's vast and perilous landscapes lie fragments of ancient power beyond counting. These hidden talent points grant adventurers the ability to enhance their abilities—boosting damage, durability, and far more. Some locations are known to adventurers, like the mystical Mirage Island, but countless others await discovery in secret areas throughout treacherous regions. Will you be the one to uncover them? Whether you keep your discoveries close or share them with the community, the power that awaits is legendary.
          </p>

          <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '12px', fontSize: '0.85rem' }}>
            <div>
              <strong style={{ color: 'var(--text)', display: 'block', fontSize: '1.3rem' }}>Unknown</strong>
              <span style={{ color: 'var(--text-muted)' }}>Total Locations</span>
            </div>
            <div>
              <strong style={{ color: 'var(--text)', display: 'block', fontSize: '1.3rem' }}>∞</strong>
              <span style={{ color: 'var(--text-muted)' }}>Power Points</span>
            </div>
            <div>
              <strong style={{ color: 'var(--text)', display: 'block', fontSize: '1.3rem' }}>Unknown</strong>
              <span style={{ color: 'var(--text-muted)' }}>Yet Discovered</span>
            </div>
            <div>
              <strong style={{ color: 'var(--text)', display: 'block', fontSize: '1.3rem' }}>✓ Explore</strong>
              <span style={{ color: 'var(--text-muted)' }}>And Discover</span>
            </div>
          </div>
        </div>

        <aside className="panel side-panel">
          <div className="panel-header">
            <span className="eyebrow">The Mystery Awaits</span>
            <h2>Your Adventure</h2>
          </div>

          <div style={{ display: 'grid', gap: '12px' }}>
            <div style={{ padding: '12px', borderRadius: '8px', background: 'var(--bg-soft)', border: '1px solid var(--line)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Total Locations</span>
              <div style={{ color: 'var(--text)', fontWeight: '700', fontSize: '1.2rem' }}>Unknown</div>
              <p style={{ margin: '4px 0 0 0', fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>More discoveries await beyond what's documented</p>
            </div>

            <div style={{ padding: '12px', borderRadius: '8px', background: 'var(--bg-soft)', border: '1px solid var(--line)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Share Your Finds</span>
              <p style={{ margin: '0', fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>Keep discoveries to yourself or share with the community</p>
            </div>

            <div style={{ padding: '12px', borderRadius: '8px', background: 'var(--bg-soft)', border: '1px solid var(--line)' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Explore & Uncover</span>
              <p style={{ margin: '0', fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>Venture into the unknown and discover power beyond measure</p>
            </div>
          </div>
        </aside>
      </section>

      {/* Filter Section */}
      <section className="content-section" style={{ marginBottom: '20px' }}>
        <div style={{ display: 'grid', gap: '16px' }}>
          {/* Search */}
          <div>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '8px', fontWeight: '600' }}>
              Search Locations
            </label>
            <input
              type="text"
              placeholder="Search by location name or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '8px',
                border: '1px solid var(--line)',
                background: 'var(--bg-elevated)',
                color: 'var(--text)',
                fontSize: '0.95rem'
              }}
            />
          </div>


          {/* Results */}
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Found {filteredLocations.length} of {locations.length} locations
            {searchQuery && <span> (Search: "{searchQuery}")</span>}
          </div>
        </div>
      </section>

      {/* Locations */}
      {filteredLocations.length > 0 ? (
        <section className="content-section">
          <div style={{ display: 'grid', gap: '16px' }}>
            {filteredLocations.map((location) => {
              const diffColor = difficulties[location.difficulty].color;
              const isExpanded = expandedLocations[location.id];

              return (
                <div
                  key={location.id}
                  onClick={() => toggleLocation(location.id)}
                  style={{
                    padding: '20px',
                    borderRadius: '12px',
                    background: 'var(--bg-soft)',
                    border: '1px solid var(--line)',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--text-muted)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--line)';
                  }}
                >
                  {/* Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: '12px', marginBottom: '12px' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                        <h3 style={{ margin: 0, fontSize: '1.15rem', color: 'var(--text)', fontWeight: '700' }}>
                          {location.name}
                        </h3>
                      </div>
                      <p style={{ margin: '4px 0 0 0', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.4' }}>
                        {location.description}
                      </p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                      <span style={{
                        padding: '4px 12px',
                        borderRadius: '6px',
                        background: 'var(--bg-elevated)',
                        border: '1px solid var(--line)',
                        color: 'var(--text-muted)',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        whiteSpace: 'nowrap'
                      }}>
                        {difficulties[location.difficulty].label}
                      </span>
                    </div>
                  </div>

                  {/* Quick Info */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '8px', marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid var(--line)' }}>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      <span style={{ fontWeight: '600' }}>Status:</span> Open to Exploration
                    </div>
                  </div>

                  {/* Expand Button */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                      {isExpanded ? 'Hide Details' : 'Explore Details'}
                    </span>
                    <span style={{ color: diffColor, fontSize: '1.2rem', fontWeight: '700' }}>
                      {isExpanded ? '−' : '+'}
                    </span>
                  </div>

                  {/* Expanded Content */}
                  {isExpanded && (
                    <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--line)', display: 'grid', gap: '16px' }}>
                      {/* Image Gallery */}
                      {location.images && location.images.length > 0 && (
                        <div>
                          <h4 style={{ margin: '0 0 12px 0', color: 'var(--text)', fontWeight: '700' }}>🎨 Location Gallery</h4>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
                            {location.images.map((image, idx) => (
                              <img
                                key={idx}
                                src={image}
                                alt={`${location.name} screenshot ${idx + 1}`}
                                style={{
                                  width: '100%',
                                  height: '300px',
                                  objectFit: 'cover',
                                  borderRadius: '8px',
                                  border: '1px solid var(--line)',
                                  cursor: 'pointer'
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Lore */}
                      <div>
                        <h4 style={{ margin: '0 0 8px 0', color: 'var(--text)', fontWeight: '700' }}>✨ Legends & Lore</h4>
                        <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.9rem', fontStyle: 'italic' }}>
                          {location.lore}
                        </p>
                      </div>

                      {/* Difficulty Info */}
                      <div>
                        <h4 style={{ margin: '0 0 8px 0', color: 'var(--text)', fontWeight: '700' }}>⚔️ Challenge Level</h4>
                        <p style={{ margin: 0, color: 'var(--text-muted)', lineHeight: '1.5', fontSize: '0.9rem' }}>
                          {location.difficulty_description}
                        </p>
                      </div>

                      {/* Rewards */}
                      <div>
                        <h4 style={{ margin: '0 0 8px 0', color: 'var(--text)', fontWeight: '700' }}>🏆 Stat Bonuses</h4>
                        <div style={{ display: 'grid', gap: '6px' }}>
                          {location.rewards.map((reward, idx) => (
                            <div key={idx} style={{ padding: '10px 12px', borderRadius: '6px', background: 'var(--bg-soft)', border: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                              <span style={{ color: 'var(--text)', fontWeight: '600' }}>{reward.stat}</span>
                              <span style={{ color: 'var(--text)', fontWeight: '700' }}>{reward.boost}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Challenges */}
                      <div>
                        <h4 style={{ margin: '0 0 8px 0', color: 'var(--text)', fontWeight: '700' }}>🛡️ Trials</h4>
                        <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.9rem' }}>
                          {location.challenges.map((challenge, idx) => (
                            <li key={idx}>{challenge}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Tips */}
                      <div>
                        <h4 style={{ margin: '0 0 8px 0', color: 'var(--text)', fontWeight: '700' }}>💡 Adventurer's Tips</h4>
                        <ul style={{ margin: 0, paddingLeft: '20px', color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.9rem' }}>
                          {location.tips.map((tip, idx) => (
                            <li key={idx}>{tip}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Loot Drops */}
                      {location.loot && (
                        <div>
                          <h4 style={{ margin: '0 0 12px 0', color: 'var(--text)', fontWeight: '700' }}>💰 Loot Drops</h4>
                          <div style={{ display: 'grid', gap: '8px' }}>
                            {location.loot.common && location.loot.common.length > 0 && (
                              <div>
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Common</span>
                                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                                  {location.loot.common.join(', ')}
                                </p>
                              </div>
                            )}
                            {location.loot.uncommon && location.loot.uncommon.length > 0 && (
                              <div>
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Uncommon</span>
                                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                                  {location.loot.uncommon.join(', ')}
                                </p>
                              </div>
                            )}
                            {location.loot.rare && location.loot.rare.length > 0 && (
                              <div>
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Rare</span>
                                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                                  {location.loot.rare.join(', ')}
                                </p>
                              </div>
                            )}
                            {location.loot.legendary && location.loot.legendary.length > 0 && (
                              <div style={{ padding: '10px 12px', borderRadius: '6px', background: 'var(--bg-soft)', border: '1px solid var(--line)' }}>
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Legendary</span>
                                <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text)', lineHeight: '1.5' }}>
                                  {location.loot.legendary.join(', ')}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      ) : (
        <section className="content-section">
          <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--text-muted)' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>No locations found</h3>
            <p>Try adjusting your search query or region filter</p>
          </div>
        </section>
      )}

      {/* Info Section */}
      <section className="content-section" style={{ marginTop: '40px', paddingTop: '40px', borderTop: '1px solid var(--line)' }}>
        <div style={{ padding: '24px', borderRadius: '12px', background: 'var(--bg-soft)', border: '1px solid var(--line)' }}>
          <h2 style={{ margin: '0 0 16px 0', fontSize: '1.3rem', color: 'var(--text)' }}>
            🗺️ About Hidden Talent Points
          </h2>

          <div style={{ display: 'grid', gap: '16px' }}>
            <div style={{ padding: '12px 16px', borderRadius: '8px', background: 'var(--bg-elevated)', border: '1px solid var(--line)' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text)', fontWeight: '700' }}>∞ Unlimited Mystery</span>
              <p style={{ margin: '8px 0 0 0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                Hidden talent points are scattered across Evolisca in unlimited quantities. Mirage Island is just one known location—countless others await discovery. Only explore and discover them yourself!
              </p>
            </div>

            <p style={{ margin: 0, color: 'var(--text)', lineHeight: '1.7' }}>
              These ancient fragments of power are hidden throughout Evolisca's vast and treacherous landscapes. Each location presents unique challenges tailored to its environment and the power it contains. The true number of discoveries remains unknown—will you be among those who uncover them? Whether you keep your finds secret or share them with fellow adventurers, the power that awaits is beyond measure.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px' }}>
              <div style={{ padding: '16px', borderRadius: '8px', background: 'var(--bg-soft)', border: '1px solid var(--line)' }}>
                <strong style={{ color: 'var(--text)', display: 'block', marginBottom: '8px' }}>🌟 Why Discover Them?</strong>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Each talent point grants permanent stat bonuses to enhance your combat prowess, survivability, and magical capabilities far beyond normal progression.
                </p>
              </div>

              <div style={{ padding: '16px', borderRadius: '8px', background: 'var(--bg-soft)', border: '1px solid var(--line)' }}>
                <strong style={{ color: 'var(--text)', display: 'block', marginBottom: '8px' }}>🎯 Explore & Discover</strong>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Venture into the unknown, explore treacherous landscapes, solve environmental puzzles, and overcome trials to claim the power hidden within.
                </p>
              </div>

              <div style={{ padding: '16px', borderRadius: '8px', background: 'var(--bg-soft)', border: '1px solid var(--line)' }}>
                <strong style={{ color: 'var(--text)', display: 'block', marginBottom: '8px' }}>⚡ Keep or Share</strong>
                <p style={{ margin: 0, color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Your discoveries are yours to keep private or share with the community. Join others in uncovering the unlimited power of Evolisca.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
