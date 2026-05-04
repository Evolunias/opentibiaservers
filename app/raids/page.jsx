'use client';

export const dynamic = 'force-dynamic';

import { useState } from 'react';
import bossLootData from '@/public/data/boss-loot.json';

const raidBossLootMap = bossLootData;

const bossImageMap = {
  'Infectanus': '/images/boss-raid-assets/boss-001.webp',
  'Ward Barbarian': '/images/boss-raid-assets/boss-002.webp',
  'EtherShreck': '/images/boss-raid-assets/boss-003.webp',
  'Dracola': '/images/boss-raid-assets/boss-004.webp',
  'Actors Power': '/images/boss-raid-assets/boss-005.webp',
  'Ancient Fungus': '/images/boss-raid-assets/boss-006.webp',
  'Eldritchbane': '/images/boss-raid-assets/boss-007.webp',
  'Frostbite': '/images/boss-raid-assets/boss-008.webp',
  'Ise': '/images/boss-raid-assets/boss-009.webp',
  'Blackbeard': '/images/boss-raid-assets/boss-010.webp',
  'Senkken': '/images/boss-raid-assets/boss-011.webp',
  'Demon Visco': '/images/boss-raid-assets/boss-012.webp',
  'Shenlong Lord': '/images/boss-raid-assets/boss-013.webp',
  'Glooth Bomb': '/images/boss-raid-assets/boss-014.webp',
  'Death Mage': '/images/boss-raid-assets/boss-015.webp',
  'Cerberus': '/images/boss-raid-assets/boss-016.webp',
};

export default function RaidsPage() {
  const [selectedRaidType, setSelectedRaidType] = useState('all');

  const getLootData = (bossName) => {
    return raidBossLootMap[bossName] || null;
  };

  const raids = {
    parchment: {
      label: 'Boss Raid Parchment Raids',
      description: 'Summon powerful world bosses using Raid Parchments. These bosses are looted from other bosses throughout Evolisca.',
      requirements: 'Raid Parchment (found from boss drops) | Cooldown: 1 hour | Must use in Protection Zone (PZ)',
      mechanics: 'After summoning, you have 3 minutes to gather your team and head West of the Temple to the boss raid area.',
      raids: [
        { name: 'Infectanus', location: 'Medusa Spawn (Last floor)', notes: 'Found in deep dungeon area' },
        { name: 'Ward Barbarian', location: 'Warlock Spawn', notes: 'Accessible boss raid location' },
        { name: 'EtherShreck', location: 'Ghastly Dragon Spawn', notes: 'Ethereal difficulty boss' },
        { name: 'Dracola', location: 'Undead Dragon', notes: 'Undead variant raid boss' },
        { name: 'Actors Power', location: 'Golden Lord Spawn', notes: 'High-tier raid encounter' },
        { name: 'Ancient Fungus', location: 'Hideous Fungus', notes: 'Fungal-type raid boss' },
        { name: 'Eldritchbane', location: 'Rahemos', notes: 'Eldritch magic-based boss' },
        { name: 'Frostbite', location: 'Azure Dragon', notes: 'Ice and dragon elements' },
        { name: 'Ise', location: 'Dark Sorcerer', notes: 'Sorcerer-class raid boss' },
        { name: 'Blackbeard', location: 'Pirates area (way from Elves teleport)', notes: 'Pirate-themed raid' },
        { name: 'Senkken', location: 'Roshamoul', notes: 'Requires: Complete Yassin NPC mission for access' },
        { name: 'Demon Visco', location: 'Mutated Visco Spawn', notes: 'Demonic variant boss' },
        { name: 'Shenlong Lord', location: 'Shenlong Spawn', notes: 'Eastern-themed powerful boss' },
        { name: 'Glooth Bomb', location: '2nd Promotion Quest', notes: 'Quest-gated raid boss' },
        { name: 'Death Mage', location: 'Infernalists (Mirage Island)', notes: 'North of left entrance to black knights area' },
        { name: 'Cerberus', location: 'Nightmare Spawn (Mirage Island)', notes: 'Three-headed mythical guardian' },
      ]
    },
    special: {
      label: 'Special Raids',
      description: 'Unique raid encounters with special mechanics and requirements.',
      requirements: 'Varies by raid type',
      raids: [
        { name: 'Goblins Raid', location: 'Temple area', access: 'Use the Mallet (located in Temple)', notes: 'Goblins raid the server to steal loot. Use the mallet to slay them and claim rewards.' },
      ]
    }
  };

  const raidSystem = {
    name: 'Raid Parchment System',
    description: 'The primary raid system in Evolisca revolves around Boss Raid Parchments.',
    mechanics: [
      { step: '1. Obtain Parchment', description: 'Defeat bosses throughout Evolisca to receive Raid Parchments as drops' },
      { step: '2. Enter PZ', description: 'Travel to a Protection Zone (PZ) with your Raid Parchment' },
      { step: '3. Summon Boss', description: 'Use the Raid Parchment to summon one of 4 random World Bosses' },
      { step: '4. Assemble Team', description: 'You have 3 minutes to gather your team members' },
      { step: '5. Head to Arena', description: 'Travel West of the Temple to reach the boss raid area' },
      { step: '6. Defeat Boss', description: 'Work together to defeat the summoned raid boss and claim rewards' },
    ],
    cooldown: '1 hour between uses',
    location: 'Boss Raid Area: West of Temple',
  };

  const worldBosses = {
    name: 'World Bosses',
    description: '4 random world bosses that can be summoned via Raid Parchment',
    note: 'The specific identity of the 4 world bosses is randomized when summoned',
    reward_system: 'Reward Chest system - Defeated raid bosses drop rewards into a designated reward container for collection',
  };

  const raidTypes = Object.entries(raids);
  const displayRaids = selectedRaidType === 'all' 
    ? raidTypes 
    : raidTypes.filter(([key]) => key === selectedRaidType);

  return (
    <main className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <section className="hero-grid">
        <div className="hero-copy panel hero-panel">
          <span className="eyebrow">Raids</span>
          <h1>Raid Encounters & Boss Locations</h1>
          <p>
            Master Evolisca's raid system using Raid Parchments to summon powerful world bosses. Discover locations, mechanics, and strategies for all raid encounters.
          </p>

          <div style={{ marginTop: '24px' }}>
            <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>
              Raid Type
            </label>
            <select
              value={selectedRaidType}
              onChange={(e) => setSelectedRaidType(e.target.value)}
              style={{
                padding: '12px 14px',
                borderRadius: '10px',
                border: '1px solid var(--line)',
                background: 'var(--bg-elevated)',
                color: 'var(--text)',
                width: '100%',
                cursor: 'pointer',
                fontSize: '0.95rem',
              }}
            >
              <option value="all">All Raid Types</option>
              <option value="parchment">Boss Raid Parchment</option>
              <option value="special">Special Raids</option>
            </select>
          </div>
        </div>

        <aside className="panel side-panel">
          <div className="panel-header">
            <span className="eyebrow">Quick Info</span>
            <h2>Raid System Basics</h2>
          </div>

          <div style={{ display: 'grid', gap: '16px' }}>
            <div>
              <strong style={{ display: 'block', marginBottom: '6px', color: 'var(--gold)' }}>Raid Parchments</strong>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0' }}>
                Drop from bosses. Use in PZ to summon world bosses. Cooldown: 1 hour.
              </p>
            </div>
            <div>
              <strong style={{ display: 'block', marginBottom: '6px', color: 'var(--gold)' }}>Boss Location</strong>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0' }}>
                West of Temple. 3 minutes to gather team after summoning.
              </p>
            </div>
            <div>
              <strong style={{ display: 'block', marginBottom: '6px', color: 'var(--gold)' }}>Rewards</strong>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0' }}>
                Claim loot from Reward Chest after defeating raid bosses.
              </p>
            </div>
          </div>
        </aside>
      </section>

      {/* Raid Categories */}
      <section className="content-section">
        {displayRaids.map(([typeKey, typeData]) => (
          <div key={typeKey} style={{ marginBottom: '40px' }}>
            <div className="section-heading compact">
              <div>
                <span className="eyebrow">{typeData.label}</span>
                <h2>{typeData.label}</h2>
                <p style={{ marginTop: '8px', color: 'var(--text-muted)' }}>
                  {typeData.description}
                </p>
                <p style={{ marginTop: '8px', fontSize: '0.9rem', color: 'var(--gold)', fontWeight: '500' }}>
                  {typeData.requirements}
                </p>
                {typeData.mechanics && (
                  <p style={{ marginTop: '6px', fontSize: '0.9rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                    {typeData.mechanics}
                  </p>
                )}
              </div>
            </div>

            <div style={{ display: 'grid', gap: '16px', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
              {typeData.raids.map((raid) => (
                <article
                  key={raid.name}
                  className="panel"
                  style={{
                    padding: '20px',
                    borderRadius: '16px',
                    display: 'grid',
                    gap: '12px',
                  }}
                >
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    {bossImageMap[raid.name] && (
                      <img
                        src={bossImageMap[raid.name]}
                        alt={raid.name}
                        style={{
                          width: '100px',
                          height: '100px',
                          objectFit: 'cover',
                          borderRadius: '8px',
                          flexShrink: 0
                        }}
                      />
                    )}
                    <strong style={{ display: 'block', fontSize: '1.1rem', color: 'var(--gold)' }}>{raid.name}</strong>
                  </div>

                  <div style={{ paddingTop: '12px', borderTop: '1px solid var(--line)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '6px' }}>
                      <span style={{ color: 'var(--text-muted)' }}>Location</span>
                      <strong style={{ color: 'var(--text)' }}>{raid.location || raid.access}</strong>
                    </div>

                    {raid.access && (
                      <div style={{ marginTop: '8px' }}>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Access</span>
                        <p style={{ margin: '0', fontSize: '0.85rem', color: 'var(--text)', padding: '8px', borderRadius: '6px', background: 'rgba(251, 191, 36, 0.05)' }}>
                          {raid.access}
                        </p>
                      </div>
                    )}

                    {raid.notes && (
                      <div style={{ marginTop: '8px', padding: '8px', borderRadius: '6px', background: 'rgba(251, 191, 36, 0.1)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        <strong style={{ color: 'var(--gold)' }}>Note:</strong> {raid.notes}
                      </div>
                    )}

                    {(() => {
                      const loot = getLootData(raid.name);
                      return loot ? (
                        <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid rgba(100, 150, 255, 0.1)' }}>
                          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>Loot Drops</span>
                          <div style={{ display: 'grid', gap: '6px' }}>
                            {loot.common && loot.common.length > 0 && (
                              <div style={{ fontSize: '0.8rem' }}>
                                <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Common:</span>
                                <p style={{ margin: '2px 0 0 0', color: 'var(--text-muted)', fontSize: '0.75rem', lineHeight: '1.4' }}>
                                  {loot.common.join(', ')}
                                </p>
                              </div>
                            )}
                            {loot.uncommon && loot.uncommon.length > 0 && (
                              <div style={{ fontSize: '0.8rem' }}>
                                <span style={{ color: 'var(--text-muted)', fontWeight: '600' }}>Uncommon:</span>
                                <p style={{ margin: '2px 0 0 0', color: 'var(--text-muted)', fontSize: '0.75rem', lineHeight: '1.4' }}>
                                  {loot.uncommon.join(', ')}
                                </p>
                              </div>
                            )}
                            {loot.rare && loot.rare.length > 0 && (
                              <div style={{ fontSize: '0.8rem' }}>
                                <span style={{ color: '#ff8c00', fontWeight: '600' }}>Rare:</span>
                                <p style={{ margin: '2px 0 0 0', color: 'var(--text-muted)', fontSize: '0.75rem', lineHeight: '1.4' }}>
                                  {loot.rare.join(', ')}
                                </p>
                              </div>
                            )}
                            {loot.legendary && loot.legendary.length > 0 && (
                              <div style={{ padding: '6px 8px', borderRadius: '4px', background: 'rgba(251, 191, 36, 0.1)', border: '1px solid rgba(251, 191, 36, 0.2)' }}>
                                <span style={{ color: 'var(--gold)', fontWeight: '600', fontSize: '0.8rem' }}>Legendary:</span>
                                <p style={{ margin: '2px 0 0 0', color: 'var(--gold)', fontSize: '0.75rem', lineHeight: '1.4' }}>
                                  {loot.legendary.join(', ')}
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      ) : null;
                    })()}
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Raid Parchment System Details */}
      {selectedRaidType === 'all' && (
        <section className="content-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Core System</span>
              <h2>Raid Parchment Mechanics</h2>
            </div>
            <p>
              How to obtain and use Raid Parchments to summon world bosses.
            </p>
          </div>

          <article className="panel" style={{ padding: '24px', marginBottom: '24px' }}>
            <h3 style={{ margin: '0 0 16px 0', color: 'var(--gold)' }}>System Overview</h3>
            <p style={{ margin: '0 0 16px 0', fontSize: '0.95rem', color: 'var(--text)' }}>
              {raidSystem.description} These parchments are looted as drops from bosses throughout the world and can be used to summon one of 4 powerful world bosses in a dedicated raid arena.
            </p>
            <div style={{ display: 'grid', gap: '12px', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
              <div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Cooldown</span>
                <strong style={{ display: 'block', color: 'var(--text)', marginTop: '4px' }}>{raidSystem.cooldown}</strong>
              </div>
              <div>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Arena Location</span>
                <strong style={{ display: 'block', color: 'var(--text)', marginTop: '4px' }}>{raidSystem.location}</strong>
              </div>
            </div>
          </article>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ margin: '0 0 12px 0' }}>6-Step Raid Process</h3>
            <div style={{ display: 'grid', gap: '12px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              {raidSystem.mechanics.map((mech, i) => (
                <article key={i} className="panel" style={{ padding: '16px', borderRadius: '12px' }}>
                  <strong style={{ color: 'var(--gold)', fontSize: '0.95rem', display: 'block', marginBottom: '6px' }}>
                    {mech.step}
                  </strong>
                  <p style={{ margin: '0', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    {mech.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <article className="panel" style={{ padding: '20px', borderRadius: '14px', background: 'rgba(251, 191, 36, 0.05)', border: '1px solid rgba(251, 191, 36, 0.2)' }}>
            <strong style={{ color: 'var(--gold)', fontSize: '1rem', display: 'block', marginBottom: '8px' }}>
              World Bosses
            </strong>
            <p style={{ margin: '0 0 12px 0', fontSize: '0.9rem', color: 'var(--text)' }}>
              {worldBosses.description}
            </p>
            <p style={{ margin: '0 0 12px 0', fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
              {worldBosses.note}
            </p>
            <div style={{ padding: '12px', borderRadius: '8px', background: 'var(--bg-elevated)', fontSize: '0.85rem', color: 'var(--gold)' }}>
              <strong>Reward System:</strong> {worldBosses.reward_system}
            </div>
          </article>
        </section>
      )}

      {/* Boss Raid Locations Summary */}
      {selectedRaidType === 'all' && (
        <section className="content-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Reference</span>
              <h2>All Raid Boss Locations</h2>
            </div>
            <p>
              Quick reference guide for all raid boss locations accessible via Raid Parchments.
            </p>
          </div>

          <article className="panel" style={{ padding: '24px', borderRadius: '14px' }}>
            <div style={{ display: 'grid', gap: '8px' }}>
              {raids.parchment.raids.map((boss, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', paddingBottom: '8px', borderBottom: i < raids.parchment.raids.length - 1 ? '1px solid var(--line)' : 'none' }}>
                  <div style={{ flex: 1 }}>
                    <strong style={{ color: 'var(--gold)', fontSize: '0.9rem', display: 'block' }}>{boss.name}</strong>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginTop: '2px' }}>{boss.location}</span>
                  </div>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginLeft: '16px', textAlign: 'right' }}>{boss.notes}</span>
                </div>
              ))}
            </div>
          </article>
        </section>
      )}
    </main>
  );
}
