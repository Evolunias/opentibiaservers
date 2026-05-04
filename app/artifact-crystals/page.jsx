'use client';

import { Gem, Lock } from 'lucide-react';
import './artifact-crystals.css';

const bossesData = [
  {
    tier: '200+',
    tierLabel: 'Novice Challengers',
    bosses: [
      { name: 'Hellspawn', level: '200+', difficulty: 'Intermediate' },
      { name: 'Serpent Spawn', level: '200+', difficulty: 'Intermediate' },
    ],
  },
  {
    tier: '600+',
    tierLabel: 'Expert Adversaries',
    bosses: [
      { name: 'The Hive', level: '600+', difficulty: 'Advanced' },
      { name: 'Lizard Chosen', level: '600+', difficulty: 'Advanced' },
      { name: 'Cursed Ape', level: '600+', difficulty: 'Advanced' },
      { name: 'Braindeath', level: '600+', difficulty: 'Advanced' },
    ],
  },
  {
    tier: '1200+',
    tierLabel: 'Legendary Foes',
    bosses: [
      { name: 'Nerubian', level: '1200+', difficulty: 'Legendary' },
      { name: 'Plaguesmith', level: '1200+', difficulty: 'Legendary' },
      { name: 'Deepling Warrior', level: '1200+', difficulty: 'Legendary' },
    ],
  },
  {
    tier: '3000+',
    tierLabel: 'Mythic Titans',
    bosses: [
      { name: 'Coming Soon', level: '3000+', difficulty: 'Mythic', comingSoon: true },
    ],
  },
];

export default function ArtifactCrystalsPage() {
  return (
    <main className="page-shell">
      <header className="page-header">
        <span className="eyebrow">Legendary Encounters</span>
        <h1>Artifact Crystals</h1>
        <p>Unlock the power of ancient crystals to face forgotten bosses and claim legendary cosmetic treasures. Discover mystical relics scattered across the realm that summon formidable adversaries.</p>
      </header>

      <div className="artifact-crystals-container">
        {/* Hero Images Section */}
        <div className="crystal-showcase">
          <img
            src="/images/artifact-crystal-scene-1.webp"
            alt="Artifact Crystal Scene 1"
            className="showcase-image"
          />
        </div>

        {/* Info Section */}
        <div className="info-section">
          <div className="info-box">
            <h3>What are Artifact Crystals?</h3>
            <p>
              Artifact Crystals are mystical relics of immense power scattered across various spawns throughout the realm.
              These enchanted objects serve as keys to unlock encounters with formidable bosses that would otherwise remain
              inaccessible. When activated by pulling the sacred lever within a boss chamber, these crystals summon powerful
              adversaries capable of dropping exclusive cosmetic items and treasures. Only adventurers who possess the requisite
              level and courage to venture into these restricted areas can hope to harness their extraordinary power.
            </p>
            <img
              src="/images/artifact-crystal-blue.webp"
              alt="Artifact Crystal"
              className="info-crystal"
            />
          </div>
        </div>

        {/* Boss Tiers */}
        <div className="boss-tiers">
          {bossesData.map((tierData) => (
            <div key={tierData.tier} className="tier-section">
              {/* Tier Header */}
              <div className="tier-header">
                <div className="tier-bar"></div>
                <div className="tier-info">
                  <h3>Level Requirement</h3>
                  <h2 className="tier-title">{tierData.tier}</h2>
                  <p className="tier-desc">
                    {tierData.tierLabel} {tierData.bosses.length > 0 && `• ${tierData.bosses.length} Boss${tierData.bosses.length > 1 ? 'es' : ''}`}
                  </p>
                </div>
              </div>

              {/* Boss List */}
              <div className="bosses-grid">
                {tierData.bosses.map((boss, idx) => (
                  <div key={idx} className={`boss-card ${boss.comingSoon ? 'coming-soon' : ''}`}>
                    {boss.comingSoon && (
                      <div className="coming-soon-badge">
                        <Lock size={16} />
                        Coming Soon
                      </div>
                    )}
                    <h4>{boss.name}</h4>
                    <div className="boss-stat">
                      <span className="stat-label">Level Requirement</span>
                      <span className="stat-value">{boss.level}</span>
                    </div>
                    <div className="boss-stat">
                      <span className="stat-label">Difficulty</span>
                      <span className="stat-value">{boss.difficulty}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tips Section */}
        <div className="tips-section">
          <h3>Tips for Crystal Hunters</h3>
          <ul className="tips-list">
            <li>Always ensure you meet the minimum level requirement before attempting a boss encounter</li>
            <li>Preparation and strategy are crucial—gather supplies and coordinate with allies if possible</li>
            <li>Defeated bosses may drop exclusive cosmetic items, making the challenge worthwhile</li>
            <li>Check back regularly for new boss spawns as the realm continues to expand</li>
            <li>Each spawn location houses unique challenges and rewards—explore them all</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
