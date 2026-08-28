import ServerLogo from '@/app/components/ServerLogo';

const contents = [
  ['overview', 'Overview & Server Identity'],
  ['world', 'Bravora World & 7.4 Philosophy'],
  ['systems', 'Systems, Areas & Quality of Life'],
  ['raids', 'Raids, Bosses & Elite Content'],
  ['progression', 'Tasks, Parties & Progression'],
  ['community', 'Community and Getting Started'],
  ['sources', 'Sources & Current Verification'],
  ['external-links', 'External Links'],
];

const features = [
  ['Enhanced Client', 'The official site provides an Enhanced Client with launcher improvements and client-side quality-of-life updates.'],
  ['Anti-bot protection', 'Exordion advertises an anti-bot system intended to reduce abuse and improve server security.'],
  ['Global proxy', 'A global proxy is advertised for connectivity and lower-ping access; technical routing details should be confirmed officially.'],
  ['No reset', 'The official positioning emphasizes a persistent world rather than a reset-driven seasonal cycle.'],
  ['Global and custom map', 'The world combines old-school 7.4 identity with custom areas, hunts, monsters, quests, and systems.'],
  ['Equipment upgrades', 'Upgrade events, equipment rarity, Orbs, and related item systems are part of the documented service feature set.'],
  ['Autoloot and training', 'Autoloot, training items, safe-zone time, blessings, and other conveniences are referenced in the official site material.'],
  ['Hunting Guide and Minimap', 'The Hunting Guide and Minimap updates support navigation and activity discovery across the expanded world.'],
];

export default function ExordionWikiPage() {
  return (
    <main className="cyntara-wiki min-h-screen" data-server-slug="exordion">
      <header className="cyntara-wiki__header">
        <h1>Exordion</h1>
        <small>From OpenTibiaServers Wiki, the primary open tibia server directory</small>
      </header>

      <div className="cyntara-wiki__grid">
        <article className="cyntara-wiki__content">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="min-w-0 flex-1">
              <p><strong>Exordion</strong> is a custom Tibia 7.4 server whose current world, Bravora, combines an old-school foundation with custom map content, new areas, exclusive systems, an Enhanced Client, and frequent updates.</p>
              <p>The official pages describe Bravora as started on 11 March 2026 at 17:00 BRT / 21:00 CET. This profile keeps launch announcements and temporary events separate from permanent rules, because rates, schedules, and available content can change.</p>
            </div>
            <div className="w-full shrink-0 md:w-64"><ServerLogo server={{ name: 'Exordion', slug: 'exordion', host: 'exordion.com.br' }} size="profile" /></div>
          </div>

          <nav className="cyntara-wiki__toc" aria-label="Table of Contents">
            <h2>Contents</h2>
            <ol>{contents.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol>
          </nav>

          <section id="overview">
            <SectionHeading>Overview &amp; Server Identity</SectionHeading>
            <p>Exordion’s strongest documented identity is its attempt to preserve the spirit of Tibia 7.4 while adding a modern service layer. The official site describes more than three years of development, low ping, a persistent world, custom map content, exclusive systems, anti-bot protection, and a global proxy.</p>
            <p>Bravora is the named Exordion world. Official announcements describe the opening on 11 March 2026 and later changelogs continue to reference new hunts, raids, areas, balancing, and events. The live directory remains the better source for a current player count and monitor status.</p>
            <div className="cyntara-wiki__callout"><strong>Verification note</strong><p>Exordion’s official pages do not expose a stable permanent rate table or a clearly stated PvP mode in the reviewed material. Do not treat temporary Global Boost values as base experience, skill, or loot rates.</p></div>
          </section>

          <section id="world">
            <SectionHeading>Bravora World &amp; 7.4 Philosophy</SectionHeading>
            <p>Bravora is presented as a custom 7.4 experience rather than a pure historical replica. Its content references Rookgaard and Mainland alongside Dawncrest, Insectoids Island, Stonehome, Falcon Bastion, and Dark Cathedral updates.</p>
            <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>Identity signal</th><th>Documented meaning</th></tr></thead><tbody>
              <tr><th>Protocol</th><td>Tibia / Exordion 7.4</td></tr>
              <tr><th>World</th><td>Bravora</td></tr>
              <tr><th>Map</th><td>Global map plus custom areas</td></tr>
              <tr><th>Persistence</th><td>Official feature material states no reset</td></tr>
              <tr><th>Client</th><td>Enhanced Client and new Launcher</td></tr>
              <tr><th>PvP mode</th><td>Not explicitly verified in the reviewed official page content</td></tr>
            </tbody></table></div>
          </section>

          <section id="systems">
            <SectionHeading>Systems, Areas &amp; Quality of Life</SectionHeading>
            <p>Exordion’s update history shows an expanding custom world. The following systems and service features are explicitly named by official material, while exact requirements and balance values belong to the current game and wiki pages.</p>
            <div className="grid gap-4 md:grid-cols-2">{features.map(([name, description]) => <div key={name} className="rounded border border-black bg-white p-4"><h3 className="text-base font-bold text-black">{name}</h3><p className="mt-2 text-sm leading-7 text-black">{description}</p></div>)}</div>
            <p>Named areas and updates include expanded Rookgaard hunts, quests, dungeons and raids, Insectoids Island, Dawncrest, Falcon Bastion, Dark Cathedral, and the Daily Boss 200+ content featuring The Black Mire.</p>
          </section>

          <section id="raids">
            <SectionHeading>Raids, Bosses &amp; Elite Content</SectionHeading>
            <p>The Raid Cooldown update adds individual cooldown tracking and an in-game raid module. Official notes describe available raids, cooldowns, locations, cities, minimum levels, and filters for Rookgaard, Mainland, normal raids, and boss raids.</p>
            <ul>
              <li><strong>Boss status:</strong> Boss raids expose Starting and Alive states, and the cooldown begins after the boss is killed.</li>
              <li><strong>Ghazbaran:</strong> It is included in the Sacrifice boss rotation once the server top level reaches 500.</li>
              <li><strong>Elite monsters:</strong> Elite versions use Green Skull, Red Skull, and Black Skull difficulty or drop categories.</li>
              <li><strong>Golden Elites:</strong> A named event/content layer references Special Orb fragments and limited-time availability.</li>
              <li><strong>New bosses:</strong> Zhaumor in Rookgaard and The Black Mire for Daily Boss 200+ are named in the update record.</li>
            </ul>
            <div className="cyntara-wiki__callout"><strong>Event data is temporary</strong><p>Double boosts, upgrade festivals, party bonuses, and Golden Elite windows are announcements, not permanent server settings. Confirm the current news entry before planning around them.</p></div>
          </section>

          <section id="progression">
            <SectionHeading>Tasks, Parties &amp; Progression</SectionHeading>
            <p>Exordion’s progression combines regular character development with tasks, group play, hunting discovery, upgrades, and high-level boss content. Official update notes confirm party experience bonuses and group Task progression.</p>
            <ul>
              <li><strong>Party play:</strong> Temporary announcements have adjusted Party x3 and Party x4 experience bonuses; the published values should be checked against the current event.</li>
              <li><strong>Group Tasks:</strong> Official notes state that group task credit remains 0.5 per member in the referenced event context.</li>
              <li><strong>Daily Boss 200+:</strong> The Black Mire gives higher-level players a named daily challenge.</li>
              <li><strong>Upgrades and rarity:</strong> Equipment upgrades, Orbs, and rarity-related features add an item progression layer beyond baseline 7.4 equipment.</li>
              <li><strong>Rates:</strong> Permanent experience, skill, magic, and loot rates are not confirmed by the reviewed official pages.</li>
            </ul>
          </section>

          <section id="community">
            <SectionHeading>Community and Getting Started</SectionHeading>
            <p>Players should start at the official Bravora site, read the current rules, and use the official client link rather than downloading a client from an unverified mirror. The site exposes account creation, support, recovery, a wiki, and several community channels.</p>
            <ol>
              <li>Read the current <a href="https://bravora.exordion.com.br/?rules" target="_blank" rel="nofollow noopener noreferrer">server rules</a> and confirm the current client build.</li>
              <li>Download the <a href="https://bravora.exordion.com.br/?downloadclient" target="_blank" rel="nofollow noopener noreferrer">official client</a> and verify that the launcher is current.</li>
              <li>Check the current news for maintenance, temporary boosts, raids, and event windows.</li>
              <li>Use the official Discord or wiki for onboarding questions, then compare community advice with the current rules.</li>
            </ol>
            <p>The official page does not provide a clear permanent PvP description in the reviewed content. Players should confirm combat rules before investing in a character or joining a conflict-oriented group.</p>
          </section>

          <section id="sources">
            <SectionHeading>Sources &amp; Current Verification</SectionHeading>
            <p>This profile is based on Exordion and Bravora’s official pages and update material. The directory adds live monitoring context, but official rules, launcher notices, and current news take precedence over historical announcements.</p>
            <div className="grid gap-3 md:grid-cols-2">
              <SourceLink href="https://exordion.com.br/" label="Exordion official website" />
              <SourceLink href="https://bravora.exordion.com.br/" label="Bravora official world site" />
              <SourceLink href="https://exordion.gitbook.io/" label="Exordion official wiki" />
              <SourceLink href="https://bravora.exordion.com.br/?features" label="Official features" />
              <SourceLink href="https://bravora.exordion.com.br/?rules" label="Official rules" />
              <SourceLink href="https://bravora.exordion.com.br/?downloadclient" label="Official client download" />
            </div>
          </section>

          <section id="external-links">
            <SectionHeading>External Links</SectionHeading>
            <ul>
              <li><a href="https://discord.gg/K9RF9pCfvC" target="_blank" rel="nofollow noopener noreferrer">Exordion Discord</a></li>
              <li><a href="https://chat.whatsapp.com/DFzXDDqaOe2GGKmzKsKnig" target="_blank" rel="nofollow noopener noreferrer">Exordion WhatsApp community</a></li>
              <li><a href="https://instagram.com/exordion7.4/" target="_blank" rel="nofollow noopener noreferrer">Exordion Instagram</a></li>
              <li><a href="https://youtube.com/@Exordion" target="_blank" rel="nofollow noopener noreferrer">Exordion YouTube</a></li>
              <li><a href="https://trello.com/b/lxIq3Jyc/exordion-roadmap" target="_blank" rel="nofollow noopener noreferrer">Exordion roadmap</a></li>
              <li><a href="/">OpenTibiaServers directory</a></li>
            </ul>
          </section>
        </article>

        <aside className="cyntara-wiki__sidebar">
          <div className="cyntara-wiki__infobox">
            <div className="cyntara-wiki__infobox-header">Exordion</div>
            <ServerLogo server={{ name: 'Exordion', slug: 'exordion', host: 'exordion.com.br' }} size="profile" />
            <table><tbody>
              <tr><th>World</th><td>Bravora</td></tr>
              <tr><th>Protocol</th><td>Tibia 7.4</td></tr>
              <tr><th>Map</th><td>Global + custom</td></tr>
              <tr><th>Persistence</th><td>No reset advertised</td></tr>
              <tr><th>Client</th><td>Enhanced Client</td></tr>
              <tr><th>Launch</th><td>11 March 2026</td></tr>
              <tr><th>PvP</th><td>Verify current rules</td></tr>
              <tr><th>Status</th><td>Verify live directory and official site</td></tr>
            </tbody></table>
          </div>
          <div className="cyntara-wiki__callout"><strong>Official start path</strong><p>Use the Bravora site for the current rules, client, account creation, and launch notices.</p><a href="https://bravora.exordion.com.br/?downloadclient" target="_blank" rel="nofollow noopener noreferrer">Open client download</a></div>
          <div className="cyntara-wiki__recommended"><h3>Compare live listings</h3><p>Use the directory to compare Exordion with other Open Tibia worlds by protocol, location, uptime, and player signals.</p><a className="cyntara-wiki__button" href="/">Browse server listings</a></div>
        </aside>
      </div>
    </main>
  );
}

function SectionHeading({ children }) {
  return <div className="cyntara-wiki__section-heading"><h2>{children}</h2></div>;
}

function SourceLink({ href, label }) {
  return <a href={href} target="_blank" rel="nofollow noopener noreferrer" className="rounded border border-black bg-white p-4 font-bold hover:no-underline">{label}</a>;
}
