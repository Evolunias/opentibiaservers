import DirectoryRecommendation from '@/app/components/DirectoryRecommendation';
import ServerLogo from '@/app/components/ServerLogo';

const contents = [
  ['overview', 'Overview & network identity'],
  ['worlds', 'SAN, Aura & world choice'],
  ['rates', 'Rates & progression'],
  ['systems', 'Quests, bosses & custom systems'],
  ['client', 'Client, account & safe downloads'],
  ['community', 'Community, guilds & long-term play'],
  ['history', 'Taleon history & updates'],
  ['faq', 'Taleon FAQ'],
  ['related', 'Related server guides'],
  ['official-links', 'Official Taleon links'],
];

const worldRows = [
  ['SAN', 'Harder Non-PvP progression', '25× EXP listing signal', 'Most access quests and imbuements remain part of progression.'],
  ['Aura', 'Easier Non-PvP progression', '80× EXP listing signal', 'Faster leveling, more unlocked access, 3× loot, and onboarding conveniences.'],
  ['Retro', 'Separate old-client world', '8.6 / PvP listing signal', 'Treat this as a distinct ruleset and verify whether registration is open.'],
  ['Rook', 'Rookgaard-oriented world', '8.6 / PvP listing signal', 'Check its current purpose, access rules, and population separately.'],
];

const auraRows = [
  ['New-character help', 'A beginner training weapon was advertised through the receiveweapon command.'],
  ['Access model', 'Several progression accesses are unlocked to shorten the path into hunting and quest content.'],
  ['Daily rewards', 'The customized reward cycle has included experience boosts, prey rewards, and training weapons.'],
  ['Loot', 'Aura launched with 3× loot, a store Loot Pouch with autoloot, and a Thais NPC for selling loot.'],
  ['Imbuements', 'Critical tier 3, mana leech, and life leech were advertised as unlocked conveniences.'],
  ['Account progression', 'Loyalty, VIP bonuses, roulette rewards, and universal premium access shape the easy-world model.'],
];

const systemRows = [
  ['Quests and access', 'Taleon has historically emphasized a broad real-map quest library, custom quests, quest experience, and access-driven progression. SAN keeps more of those access steps meaningful; Aura removes more friction.'],
  ['Achievements and collections', 'The long-running project has documented hundreds of achievements and a collection loop in which achievement progress could earn Crown Tokens for cosmetics and other rewards.'],
  ['Bosses and raids', 'Daily bosses, classic and modern quest bosses, raids, Warzones, Grave Danger, Forgotten Knowledge, and other real-map encounters appear throughout Taleon’s update history.'],
  ['Imbuing and Forge', 'Imbuements are a major world-difficulty difference. Later client updates added remote Exaltation access, fragment-based gem improvement, and Forge support for boot tiers.'],
  ['Charms and Cyclopedia', 'A modernized charm model introduced Major and Minor Charms with reset support, while the Magical Archive added spell and rune data to the Cyclopedia.'],
  ['Guild and event play', 'The official community description highlights guild wars and unique events alongside rankings, markets, quests, and recurring bosses.'],
  ['Quality-of-life', 'Taleon has documented autoloot, reward chests, cast features, an improved stash, redesigned statistics and quest interfaces, and an in-client Player Guide.'],
];

const historyRows = [
  ['2017', 'Taleon community established', 'The official Taleon community dates its Discord server to June 2017, supporting the project’s long-running identity.'],
  ['2018', 'European launch material', 'A historical launch described a custom real-map server with staged mid-low rates, extensive quests and achievements, Retro PvP features, Prey, imbuing, casts, reward chests, and autoloot.'],
  ['2022', 'Avalon Open PvP world', 'Avalon was presented as a Brazil-hosted Open PvP world with client 13, 25× starting experience, quests, raids, achievements, bosses, and a customized Rookgaard.'],
  ['2024', 'Aura Lite launches', 'Aura introduced the easier Non-PvP lane with faster rates, 3× loot, unlocked conveniences, customized daily rewards, loyalty, VIP, and universal premium access.'],
  ['2025', 'Client 14.12 and world consolidation', 'The 14.12 rollout added Forge, charm, Cyclopedia, stash, interface, and Player Guide changes. Gaia characters later received a time-limited route into Aura before Gaia closed.'],
  ['2026 directory snapshot', 'Modern-client worlds remain listed', 'SAN and Aura appear as Non-PvP worlds on client 15.0 signals, while Retro and Rook appear as separate 8.6 endpoints. Live official pages remain the final authority.'],
];

const faqs = [
  ['What is Taleon?', 'Taleon is a Brazilian Open Tibia server network based on a global-map style of play. Its worlds use different difficulty, progression, PvP, and client profiles rather than one universal ruleset.'],
  ['Is Taleon SAN or Aura easier?', 'Aura is the easier, faster Non-PvP option: it has been promoted with higher experience, 3× loot, unlocked access, unlocked core imbuements, and stronger onboarding conveniences. SAN is the harder Non-PvP lane and preserves more access-driven progression.'],
  ['What client does Taleon use?', 'The current directory signal for SAN and Aura is client 15.0. Taleon previously announced a 14.12 migration, while Retro and Rook appear separately as 8.6 worlds. Always use the current official download page for the world you select.'],
  ['Is Taleon PvP or Non-PvP?', 'SAN and Aura are currently represented as Non-PvP. Taleon has also operated PvP worlds, and current directory data lists separate Retro and Rook PvP endpoints. Check the selected world instead of applying one PvP label to the whole network.'],
  ['Where should I download Taleon?', 'Download only from the official SAN or Aura website after selecting your world. Back up minimap and hotkey files before a major client migration, and avoid copied launchers or third-party mirrors.'],
  ['Does Taleon have custom content?', 'Yes. Its documented history includes custom quests, achievements, collection rewards, events, bosses, guild wars, VIP and loyalty systems, autoloot, modern Forge and charm changes, a Magical Archive, and interface improvements. Availability can differ by world and update.'],
];

const officialLinks = [
  ['Taleon network website', 'https://www.taleon.online/'],
  ['Taleon Aura website', 'https://aura.taleon.online/'],
  ['Taleon SAN website', 'https://san.taleon.online/'],
  ['Taleon Aura downloads', 'https://aura.taleon.online/downloads'],
  ['Taleon SAN downloads', 'https://san.taleon.online/downloads'],
  ['Official Taleon Discord community', 'https://discord.com/servers/taleon-online-328238359275241483'],
];

export default function TaleonWikiPage() {
  return (
    <main className="cyntara-wiki min-h-screen" data-server-slug="taleon">
      <header className="cyntara-wiki__header">
        <h1>Taleon</h1>
        <small>From OpenTibiaServers Wiki, the primary Open Tibia server directory</small>
      </header>

      <div className="cyntara-wiki__grid">
        <article className="cyntara-wiki__content">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="min-w-0 flex-1">
              <p><strong><em><u>Taleon</u></em></strong> is a long-running Brazilian <strong>Open Tibia server network</strong> built around global-map content, frequent updates, multiple progression styles, custom systems, quests, bosses, achievements, events, guild activity, and modern client features. Its two principal modern worlds are <strong>SAN</strong>, the harder Non-PvP experience, and <strong>Aura</strong>, the faster and more accessible Non-PvP alternative.</p>
              <p>This <em>Taleon server guide</em> answers the questions players commonly ask before joining: which Taleon world to choose, how SAN differs from Aura, what client is required, which rates are currently advertised, what custom systems exist, and where to find a safe official download. Settings change by world, so this page keeps current listing signals separate from historical features.</p>
            </div>
            <div className="w-full shrink-0 md:w-64"><ServerLogo server={{ name: 'Taleon', slug: 'taleon', host: 'taleon.online' }} size="profile" /></div>
          </div>

          <nav className="cyntara-wiki__toc" aria-label="Table of Contents"><h2>Contents</h2><ol>{contents.map(([id, label]) => <li key={id}><a href={'#' + id}>{label}</a></li>)}</ol></nav>

          <section id="overview"><SectionHeading>Overview &amp; network identity</SectionHeading>
            <p>Taleon is better understood as a family of worlds than a single fixed server. The project’s public identity combines familiar real-map hunting and quest progression with custom rewards, quality-of-life systems, community events, markets, player rankings, daily bosses, guild competition, and a steady update cycle. The official community also presents Taleon as free to play, without a monthly subscription.</p>
            <p>The important choice is not simply whether to “play Taleon.” It is <strong>which Taleon world fits your preferred pace</strong>. SAN asks players to complete more of the underlying access and imbuement journey. Aura removes more gates, raises the early pace, and adds conveniences intended for players who want to reach group hunts and modern content sooner.</p>
            <div className="cyntara-wiki__callout"><strong>Short answer: SAN or Aura?</strong><p>Choose <strong>SAN</strong> for slower, access-led Non-PvP progression. Choose <strong>Aura</strong> for the easier Non-PvP route with faster experience, 3× loot, unlocked conveniences, and more help for a new character.</p></div>
          </section>

          <section id="worlds"><SectionHeading>SAN, Aura &amp; world choice</SectionHeading>
            <p>Current directory evidence identifies SAN and Aura as the modern Non-PvP worlds, with separate hosts and progression profiles. It also detects Taleon Retro and Taleon Rook as distinct 8.6 PvP endpoints. Those extra endpoints should not be confused with SAN or Aura, and a historical Taleon world name should never be assumed to describe a current ruleset.</p>
            <Table headers={['World', 'Positioning', 'Current directory signal', 'What it means']} rows={worldRows} />
            <p>The SAN listing uses <code>sanpvp.taleon.online</code>, while Aura uses <code>aurapvp.taleon.online</code>. The “pvp” text inside a hostname does not override the published world type: the current listings classify both as <strong>Non-PvP</strong>. Always confirm the final address and client through the official world website.</p>
            <h3>Why Aura is considered the easier world</h3><Table headers={['Aura feature', 'Player-facing effect']} rows={auraRows} />
          </section>

          <section id="rates"><SectionHeading>Rates &amp; progression</SectionHeading>
            <p>The current directory snapshot advertises <strong>25× experience for Taleon SAN</strong> and <strong>80× experience for Taleon Aura</strong>. These are discovery signals, not complete stage tables. A headline multiplier does not explain where stages change, whether a weekend or event bonus is active, or how experience behaves at high level.</p>
            <p>Aura was launched with higher experience rates, 3× loot, and easier access. SAN represents the harder lane, where quest access, imbuement unlocks, and long-term character development remain more central. Players comparing <strong><em>Taleon rates</em></strong> should also check skill, magic, spawn, boss-loot, stamina, prey, VIP, loyalty, and event modifiers on the selected world.</p>
            <ol><li>Pick SAN or Aura before comparing any rate.</li><li>Read that world’s current information and news pages.</li><li>Check whether the displayed rate is a base value, stage, or temporary event bonus.</li><li>Confirm access, imbuement, prey, premium, VIP, and store differences that affect effective progression.</li></ol>
          </section>

          <section id="systems"><SectionHeading>Quests, bosses &amp; custom systems</SectionHeading>
            <p>Taleon’s strongest distinction is the amount of content layered onto its global-map foundation. The project has long promoted extensive quest and achievement coverage, then continued adding systems from newer clients. The table below summarizes what a prospective player can reasonably expect to investigate, without implying that every feature is identical on every world.</p>
            <Table headers={['System', 'Taleon gameplay context']} rows={systemRows} />
            <div className="cyntara-wiki__callout"><strong>World differences matter</strong><p>A system can exist across Taleon while its unlock method, rate, reward, store availability, or balance differs between SAN and Aura. Use this guide to know what to look for, then confirm the selected world’s live implementation.</p></div>
          </section>

          <section id="client"><SectionHeading>Client, account &amp; safe downloads</SectionHeading>
            <p>Taleon announced a migration to client 14.12 in August 2025. That update introduced the Fragment Workshop, remote Exaltation access, boot-tier amplification, Major and Minor Charms, a Magical Archive, improved stash behavior, redesigned character statistics and quest logs, and an English in-client Player Guide. Current SAN and Aura directory signals now report client 15.0, which means the official download page—not an older article—is the correct source for the active build.</p>
            <ol><li>Choose <strong>SAN</strong> or <strong>Aura</strong> before creating an account or downloading.</li><li>Open that world’s operator-controlled website and verify the active client version.</li><li>Back up minimap, hotkeys, and other local settings before replacing a major client version.</li><li>Download only from the official world page; do not use a file mirror, forum attachment, or video-description link.</li><li>Use a unique password and valid email, and store the account recovery key securely.</li></ol>
            <div className="cyntara-wiki__callout"><strong>Current-version warning</strong><p>The 14.12 release is part of Taleon’s documented update history. The directory now reports 15.0 for SAN and Aura. Treat the version displayed on the official download page on the day you install as authoritative.</p></div>
          </section>

          <section id="community"><SectionHeading>Community, guilds &amp; long-term play</SectionHeading>
            <p>The official Taleon community dates back to 2017 and describes the network as supported by TibiaBR. Its public profile highlights Portuguese-language support, unique events, VIP, guild wars, custom quests, a market, rankings, and daily bosses. That combination makes the network relevant to solo players who want a persistent character as well as groups looking for recurring objectives.</p>
            <p>Non-PvP does not mean “single-player.” SAN and Aura still use group quests, boss rotations, guild organization, trading, rankings, and community support. Before committing to a world, inspect its recent news, online list, Discord activity, market, guild pages, and update cadence rather than judging activity from one peak-player number.</p>
          </section>

          <section id="history"><SectionHeading>Taleon history &amp; updates</SectionHeading><p>World names, clients, and mechanics have changed over Taleon’s lifetime. This timeline helps distinguish the network’s long-running identity from settings that were attached to a particular launch or season.</p><Table headers={['Period', 'Milestone', 'Why it matters']} rows={historyRows} /></section>
          <section id="faq"><SectionHeading>Taleon FAQ</SectionHeading><div className="space-y-5">{faqs.map(([question, answer]) => <div key={question}><h3>{question}</h3><p>{answer}</p></div>)}</div></section>

          <section id="related" className="cyntara-wiki__recommended" aria-label="Related server guides"><h3>Compare Taleon with other Open Tibia servers</h3><p>Compare Taleon’s modern-client, multi-world structure with other researched directory profiles. These internal guides help separate client version, PvP style, pace, and custom systems before you download.</p><div className="flex flex-wrap gap-3"><a className="cyntara-wiki__button" href="/servers/amonot">AmonOT guide</a><a className="cyntara-wiki__button" href="/servers/paulistinhaot">PaulistinhaOT guide</a><a className="cyntara-wiki__button" href="/servers/realera">Realera guide</a><a className="cyntara-wiki__button" href="/servers/ezodus">Ezodus guide</a><a className="cyntara-wiki__button" href="/knowledge">Open Tibia knowledge</a><a className="cyntara-wiki__button" href="/resources">Player resources</a></div></section>

          <DirectoryRecommendation />
          <section id="official-links"><SectionHeading>Official Taleon links</SectionHeading><p>Use these operator-controlled or official-community paths for live rules, account creation, client downloads, support, and current world announcements.</p><ul>{officialLinks.map(([label, href]) => <li key={href}><ExternalLink href={href}>{label}</ExternalLink></li>)}</ul></section>
        </article>

        <aside className="cyntara-wiki__sidebar">
          <div className="cyntara-wiki__infobox"><div className="cyntara-wiki__infobox-header">Taleon</div><ServerLogo server={{ name: 'Taleon', slug: 'taleon', host: 'taleon.online' }} size="profile" /><table><tbody><tr><th>Primary worlds</th><td>SAN and Aura</td></tr><tr><th>Region</th><td>Brazil</td></tr><tr><th>Map style</th><td>Global map with custom systems</td></tr><tr><th>SAN profile</th><td>Hard Non-PvP</td></tr><tr><th>Aura profile</th><td>Easy Non-PvP</td></tr><tr><th>Directory client</th><td>15.0 for SAN and Aura</td></tr><tr><th>Directory EXP</th><td>SAN 25× / Aura 80×</td></tr><tr><th>Aura loot</th><td>3× launch profile</td></tr><tr><th>Other endpoints</th><td>Retro and Rook 8.6</td></tr><tr><th>Community since</th><td>2017</td></tr></tbody></table></div>
          <div className="cyntara-wiki__callout"><strong>Before downloading</strong><p>Select SAN or Aura, confirm the current client and world rules, then use only that world’s official download page.</p></div>
          <div className="cyntara-wiki__recommended"><h3>Browse live listings</h3><p>Compare real-time player counts, uptime, versions, PvP modes, and regions across the directory.</p><a className="cyntara-wiki__button" href="/">Open server directory</a></div>
        </aside>
      </div>
    </main>
  );
}

function SectionHeading({ children }) { return <div className="cyntara-wiki__section-heading"><h2>{children}</h2></div>; }
function Table({ headers, rows }) { return <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row) => <tr key={row[0]}>{row.map((value, index) => index === 0 ? <th key={value}>{value}</th> : <td key={value}>{index === 1 ? <strong>{value}</strong> : value}</td>)}</tr>)}</tbody></table></div>; }
function ExternalLink({ href, children }) { return <a href={href} target="_blank" rel="nofollow noopener noreferrer">{children}</a>; }
