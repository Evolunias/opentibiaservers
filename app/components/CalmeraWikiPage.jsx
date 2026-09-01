import Link from 'next/link';
import DirectoryRecommendation from '@/app/components/DirectoryRecommendation';
import KeywordPageCommunity from '@/app/components/KeywordPageCommunity';
import ServerLogo from '@/app/components/ServerLogo';
import { buildServerSlug } from '@/lib/server-paths';
import { buildCuratedJsonLd } from '@/lib/curated-pages';
import { fetchDirectoryServers } from '@/lib/directory-data';

export const calmeraPage = {
  slug: 'calmera',
  path: '/servers/calmera',
  type: 'server',
  title: 'Calmera Server Guide: Worlds, Rates, PvP, Client & Activity',
  h1: 'Calmera: server status, worlds, how to play, and community',
  primaryKeyword: 'Calmera',
  keywords: [
    'Calmera',
    'Calmera server',
    'Calmera OT',
    'Calmera Open Tibia',
    'Calmera Anthera',
    'Calmera Emporium',
    'Calmera rates',
    'Calmera CTC Launcher',
    'Calmera players online',
  ],
  metaDescription: 'Calmera server guide covering Anthera and Emporium, 300x rates, Optional PvP, instances, the CTC Launcher, dated directory activity, safe source links, and community context.',
  updatedAt: '2026-07-26',
  sourceLinks: [
    { label: 'Calmera Servers official website', href: 'https://calmera.com.br/' },
    { label: 'Calmera CTC Launcher installation page', href: 'https://calmera.com.br/install/' },
    { label: 'Calmera Anthera play endpoint', href: 'https://play.calmera.com.br' },
    { label: 'Calmera Emporium world endpoint', href: 'https://emporium.calmera.com.br' },
    { label: 'OTServlist players-online ranking', href: 'https://otservlist.org/list-server_players_online-desc.html' },
    { label: 'OpenTibiaServers directory', href: '/' },
  ],
  faqs: [
    {
      question: 'What is Calmera?',
      answer: 'Calmera Servers is a multiworld Open Tibia project whose official site presents Anthera and Emporium. Both worlds are described as Optional PvP with 300x experience, 3x loot, a global map with VIP access, and instances; Emporium is additionally identified with an open player economy.',
    },
    {
      question: 'What are the Calmera worlds?',
      answer: 'The official Calmera site presents Anthera as the first world and Emporium as the open-economy world. Anthera is described as online since April 2021, while Emporium is described as online since February 2025.',
    },
    {
      question: 'What are the Calmera rates and PvP type?',
      answer: 'The official world cards list 300x experience, 3x loot, and Optional PvP for both Anthera and Emporium. A separate directory snapshot labels a Calmera listing x400, nPVP, and client 15.0, so players should verify which world and endpoint that older row represents before relying on it.',
    },
    {
      question: 'How do I download the Calmera client?',
      answer: 'Use the official Calmera CTC Launcher installation page. The reviewed official material describes it as an OTC client with automatic updates, access to both worlds, and an integrated bot. The page also warns that the launcher is a beta first version, so use the operator-controlled source rather than a copied mirror.',
    },
    {
      question: 'Does Calmera have an open economy?',
      answer: 'The official site specifically describes Emporium as having an open economy between players. It does not present that label as a universal rule for every Calmera world, so confirm trading, shop, and account rules for the selected world before transferring value.',
    },
    {
      question: 'How many players are online on Calmera?',
      answer: 'The reviewed official homepage displayed 416 players overall, with 384 on Anthera and 32 on Emporium. The directory snapshot separately recorded 766 players out of 2,000 and 98.98% uptime for a Calmera row. These are different source captures and should not be merged into one live count.',
    },
  ],
};

const contents = [
  ['overview', 'Overview & network identity'],
  ['facts', 'Reference facts'],
  ['worlds', 'Worlds, maps & PvP'],
  ['rates', 'Rates & progression'],
  ['client', 'CTC Launcher & safe downloads'],
  ['systems', 'Instances, economy & play style'],
  ['activity', 'Activity Signals'],
  ['record', 'Living Record'],
  ['faq', 'Calmera FAQ'],
  ['sources', 'What Public Sources Already Tell Us'],
  ['media', 'Public Screenshot and Media Sources'],
  ['listings', 'Matching Live Listings'],
  ['external-links', 'External Links'],
];

const referenceRows = [
  ['Network name', 'Calmera Servers', 'The official homepage presents Calmera as a network with Anthera and Emporium worlds.'],
  ['Official domain', 'calmera.com.br', 'Use the operator-controlled domain for world information and the CTC Launcher installation path.'],
  ['Directory host', 'servers.calmera.com.br:7171', 'Primary host recorded by the public directory snapshot; the official homepage does not publish this host or port in the reviewed capture.'],
  ['Listing profile', 'x400 / nPVP / 15.0', 'A dated directory label that conflicts with the official world cards’ 300x / Optional PvP descriptions.'],
  ['Players snapshot', '766 / 2,000', 'Public directory activity signal associated with the primary row, captured separately from the official homepage count.'],
  ['Uptime snapshot', '98.98%', 'Directory uptime signal; it is not an official service-level guarantee.'],
  ['Country signal', 'Brazil', 'Directory region field and the Brazilian .com.br domain provide the public regional signal.'],
  ['Official homepage capture', '416 overall', 'The reviewed site displayed Anthera at 384 and Emporium at 32 online.'],
  ['Profile status', 'Source-backed; current details need verification', 'World features are attributed to the official site, while endpoint and activity rows remain dated directory evidence.'],
];

const worldRows = [
  ['Anthera', '1º Mundo', 'Optional PvP', '300x / 3x', 'Global + VIP', 'Yes', 'Apr/2021', '384 online on official homepage review'],
  ['Emporium', 'Open economy', 'Optional PvP', '300x / 3x', 'Global + VIP', 'Not explicitly repeated on card', 'Feb/2025', '32 online on official homepage review'],
];

const activityRows = [
  ['Official Calmera homepage', '416 overall', 'Anthera 384 · Emporium 32', 'A world-aware website capture; the site’s count is not synchronized with the directory row below.'],
  ['OpenTibiaServers primary row', '766 / 2,000', '98.98% uptime · x400 · nPVP · 15.0', 'Snapshot associated with servers.calmera.com.br:7171 and dated July 25, 2026 in the inventory.'],
  ['Calmera alternate endpoint', '278 peak', 'eldera.calmera.com.br:7171 · Brazil · PVP · version n/a', 'Separate inventory observation; no official world mapping was found in the reviewed homepage.'],
  ['Calmera status endpoint', '218 peak', 'status.calmera.com.br:7171 · Brazil · Non-PVP · 15.0', 'Separate inventory observation; preserve it as an endpoint signal rather than assuming it is Anthera or Emporium.'],
];

const systemRows = [
  ['Global + VIP map', 'Both official world cards describe a global map with VIP access. The reviewed homepage does not provide a full zone list, VIP price table, or access requirement.'],
  ['Instances', 'Anthera is explicitly marked as supporting instances. The official homepage describes Emporium’s open economy, but does not repeat the instance value on that card.'],
  ['Open player economy', 'Emporium is specifically presented as an economy open between players. Confirm the current trade, market, shop, and transfer rules in the selected world.'],
  ['CTC Launcher', 'The official OTC client provides automatic updates, one launcher for both worlds, a simplified account/world interface, and integrated bot functionality.'],
  ['Bot policy', 'The official installation page says bot functions are fully released in the first beta moment. That product statement is not a complete rules page; ask the operator which activities and automation levels are permitted.'],
  ['Client performance', 'The official description claims optimized performance, faster loading, fewer crashes, improved PC usage, and account/data protection. Treat those as operator-published product claims rather than independent benchmarks.'],
];

const contentsSafety = [
  'Open the official Calmera website and choose the world you actually intend to play.',
  'Use the official CTC Launcher installation page and keep the launcher’s automatic update path intact.',
  'Read the current operator rules for automation, PvP conduct, account sharing, trading, and penalties before leveling or spending money.',
  'Do not reuse the directory host as a client download source; the directory row is discovery data, not an installer.',
  'If a copied launcher, mirror, or social post conflicts with the official site, treat the operator-controlled page as the source of truth.',
];

const mediaSources = [
  ['Calmera official homepage', 'https://calmera.com.br/', 'Official world cards, online counters, branding, and the public feature summary.'],
  ['Calmera installation page', 'https://calmera.com.br/install/', 'Official CTC Launcher presentation and the operator-controlled download route.'],
  ['Anthera play endpoint', 'https://play.calmera.com.br', 'World-specific play link surfaced by the official homepage; availability can change.'],
  ['Emporium world endpoint', 'https://emporium.calmera.com.br', 'World-specific Emporium link surfaced by the official homepage; availability can change.'],
];

export default async function CalmeraWikiPage() {
  const directoryData = await fetchDirectoryServers({
    page: 1,
    pageSize: 8,
    search: 'Calmera',
    onlineOnly: false,
  });
  const directoryServers = Array.isArray(directoryData?.servers) ? directoryData.servers.filter(Boolean) : [];
  const jsonLd = buildCuratedJsonLd(calmeraPage);

  return (
    <main className="cyntara-wiki min-h-screen" data-server-slug="calmera">
      {jsonLd.map((entry, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }} />)}

      <header className="cyntara-wiki__header">
        <h1>{calmeraPage.h1}</h1>
        <small>From OpenTibiaServers Wiki, the primary Open Tibia server directory</small>
      </header>

      <div className="cyntara-wiki__grid">
        <article className="cyntara-wiki__content">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="min-w-0 flex-1">
              <p><strong><em><u>Calmera</u></em></strong>, presented officially as <strong>Calmera Servers</strong>, is a Brazilian multiworld <strong>Open Tibia project</strong> with two named worlds: <strong>Anthera</strong> and <strong>Emporium</strong>. The official site describes both as <strong>Optional PvP</strong> worlds with 300x experience, 3x loot, global maps with VIP access, and a CTC Launcher built around OTC technology.</p>
              <p>This <strong><em>Calmera server guide</em></strong> separates the operator’s world cards from the public directory snapshot. That distinction matters when searching for <strong>Calmera rates</strong>, an <strong>OT client download</strong>, <strong>Calmera players online</strong>, Anthera, or Emporium: the directory row currently carries a different x400 / nPVP / 15.0 label than the official 300x / Optional PvP world descriptions.</p>
            </div>
            <div className="w-full shrink-0 md:w-64"><ServerLogo server={{ name: 'Calmera', slug: 'calmera', host: 'calmera.com.br' }} size="profile" /></div>
          </div>

          <nav className="cyntara-wiki__toc" aria-label="Table of Contents"><h2>Contents</h2><ol>{contents.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol></nav>

          <section id="overview">
            <SectionHeading>Overview &amp; network identity</SectionHeading>
            <p>Calmera is best researched as a <strong>two-world network</strong>, not as one universal server configuration. The official homepage identifies Anthera as the first world and Emporium as the open-economy world. It also presents the CTC Launcher as the shared entry point for both worlds. This makes the world choice more important than a single directory label when a player is comparing <strong><em>Calmera OT</em></strong> with other Open Tibia servers.</p>
            <p>The operator-published profile is a fast-progression Optional PvP experience: 300x experience, 3x loot, a global map with VIP access, and instances on the Anthera card. Emporium adds an explicitly open economy between players. The public directory, however, records a separate x400 / nPVP / 15.0 profile, so this page keeps the two evidence trails visible instead of silently treating them as interchangeable.</p>
            <div className="cyntara-wiki__callout"><strong>World and snapshot boundary</strong><p>Use the official site for current world identity and the CTC Launcher path. Use the directory for dated discovery and activity signals. Neither source, by itself, proves that every endpoint carrying the Calmera name belongs to the same active world.</p></div>
          </section>

          <section id="facts">
            <SectionHeading>Reference facts</SectionHeading>
            <p>The following table is a compact research record for players looking for <strong>Calmera server information</strong>. Official claims and public-list observations are deliberately labeled separately.</p>
            <Table headers={['Field', 'Recorded value', 'Evidence and context']} rows={referenceRows} />
          </section>

          <section id="worlds">
            <SectionHeading>Worlds, maps &amp; PvP</SectionHeading>
            <p>The official <a href="https://calmera.com.br/" target="_blank" rel="nofollow noopener noreferrer">Calmera homepage</a> presents two distinct choices. Both world cards show <strong>Optional PvP</strong>, 300x experience, and 3x loot. The map and launch labels help distinguish the worlds, but the reviewed page does not publish a complete vocation, quest, monster, or rules catalogue.</p>
            <Table headers={['World', 'Official label', 'PvP', 'Rates', 'Map', 'Instances', 'Online since', 'Homepage signal']} rows={worldRows} />
            <p><strong>Anthera</strong> is the first-world identity and the official card explicitly marks instances as available. <strong>Emporium</strong> is the economy-led identity, with open player-to-player economy called out in its card. The official homepage surfaced <code>play.calmera.com.br</code> for Anthera and <code>emporium.calmera.com.br</code> for Emporium; confirm that each endpoint still resolves before connecting.</p>
            <div className="cyntara-wiki__callout"><strong>Which Calmera world should a player choose?</strong><p>Choose Anthera if the documented first-world history and explicit instance label match your goals. Choose Emporium if an open player economy is the deciding factor. In either case, read the current world notice and rules before assuming that a feature is shared.</p></div>
          </section>

          <section id="rates">
            <SectionHeading>Rates &amp; progression</SectionHeading>
            <p>The official world cards provide a clear headline: <strong><em>Calmera rates</em></strong> are listed as 300x experience and 3x loot for both Anthera and Emporium. The directory’s separate x400 label is retained as a historical or alternate listing snapshot, not overwritten. No official skill, magic-level, spawn, reset, vocation, or endgame progression table was visible in the reviewed public homepage.</p>
            <div className="grid gap-4 md:grid-cols-3"><FactCard label="Experience" text="300x on the official Anthera and Emporium world cards; directory row separately records x400." /><FactCard label="Loot" text="3x on both official world cards." /><FactCard label="Pacing" text="High-rate onboarding with exact level stages and reset policy still requiring an official source." /></div>
            <p>For a useful <strong>Calmera progression guide</strong>, players should confirm whether the selected world has level stages, skill stages, magic stages, resets, VIP modifiers, task rewards, or event boosts. This page does not borrow values from the directory row to fill missing official mechanics.</p>
          </section>

          <section id="client">
            <SectionHeading>CTC Launcher &amp; safe downloads</SectionHeading>
            <p>The official <a href="https://calmera.com.br/install/" target="_blank" rel="nofollow noopener noreferrer">installation page</a> presents the <strong>CTC Launcher</strong> as Calmera’s official OTC client. It advertises automatic updates, one launcher for Anthera and Emporium, a simplified account and world-management interface, optimized performance, and an integrated bot. The page labels the launcher as a new beta first version and warns that bugs or instability may occur.</p>
            <ol>{contentsSafety.map((item) => <li key={item}>{item}</li>)}</ol>
            <div className="cyntara-wiki__callout"><strong>Client and bot policy are different questions</strong><p>The installation page’s statement that bot functions are released describes the launcher product, not a complete permission matrix for hunting, PvP, trade, or unattended play. Obtain the current rules from the operator before assuming that every bot function is allowed in every activity.</p></div>
          </section>

          <section id="systems">
            <SectionHeading>Instances, economy &amp; play style</SectionHeading>
            <p>Calmera’s publicly visible identity is built from a few high-intent features rather than a full wiki database. Players searching for <strong>Calmera instances</strong>, a <strong>Calmera open economy</strong>, or a global map can use the rows below as a source-backed starting point, while keeping the undocumented details open.</p>
            <Table headers={['System or feature', 'Documented player context']} rows={systemRows} />
            <p>The official site does not expose enough public detail to name specific instance bosses, maps, monsters, quest requirements, item sinks, market taxes, or vocation balance. Those are exactly the fields that should be added through an owner claim, an official wiki, or dated player contributions rather than inferred from generic Tibia mechanics.</p>
            <p>For broader comparisons, use the directory’s <Link href="/">server listings</Link> to compare versions, PvP labels, regions, and dated activity. Players interested in another modern client profile can also read the <Link href="/servers/paulistinhaot">PaulistinhaOT guide</Link> or the <Link href="/servers/rubinot">RubinOT guide</Link>.</p>
          </section>

          <section id="activity">
            <SectionHeading>Activity Signals</SectionHeading>
            <p>Players searching <strong><em>Calmera players online</em></strong> should compare the source, world scope, and capture context behind every number. The official homepage count of 416, the primary directory row at 766, and the alternate endpoint peaks are not one synchronized live measurement.</p>
            <Table headers={['Source signal', 'Activity value', 'Profile context', 'Interpretation']} rows={activityRows} />
            <div className="cyntara-wiki__callout"><strong>Do not combine incompatible counts</strong><p>The official website is world-aware and names Anthera and Emporium. The directory inventory contains a primary servers host plus Eldera and status endpoints with conflicting version and PvP labels. Keep those records dated until a refreshed source maps each endpoint to a current world.</p></div>
          </section>

          <section id="record">
            <SectionHeading>Living Record</SectionHeading>
            <p>Calmera’s public record currently contains two useful layers: an official network presentation and a broader directory history. The official layer establishes Anthera, Emporium, their headline rates, Optional PvP identity, map access, the Emporium economy distinction, and the CTC Launcher. The directory layer preserves older or alternate host labels, player signals, uptime, and client metadata that may help explain how the project appeared in server-list discovery.</p>
            <div className="grid gap-4 md:grid-cols-3"><FactCard label="Current official identity" text="Calmera Servers with Anthera and Emporium world cards." /><FactCard label="Feature anchors" text="300x experience, 3x loot, Optional PvP, global + VIP maps, instances, and an open Emporium economy." /><FactCard label="Open documentation" text="Protocol, complete rules, vocations, quests, monsters, items, maps, and world-to-endpoint mapping still need direct sources." /></div>
            <p>Owners and players can improve this <strong>Calmera wiki profile</strong> through the <Link href="/submit-server">server claim and submission flow</Link>, the <Link href="/community_archive">community archive</Link>, dated notes, and screenshots. A durable record should preserve both the official launch history and later corrections instead of deleting older signals.</p>
          </section>

          <section id="faq">
            <SectionHeading>Calmera FAQ</SectionHeading>
            <div className="space-y-4">{calmeraPage.faqs.map((faq) => <details key={faq.question} className="rounded border border-black bg-white p-4"><summary className="cursor-pointer text-base font-bold text-black">{faq.question}</summary><p className="mt-3 text-sm leading-7 text-black">{faq.answer}</p></details>)}</div>
          </section>

          <section id="sources">
            <SectionHeading>What Public Sources Already Tell Us</SectionHeading>
            <p>The official Calmera website is the primary source for the current public network identity, world cards, headline rates, PvP labels, map descriptions, online counters, and CTC Launcher presentation. The OpenTibiaServers inventory supplies dated discovery context for the primary host and alternate endpoints. The sources do not yet provide a complete public wiki for quests, monsters, items, vocations, rules, or all account paths.</p>
            <div className="grid gap-3 md:grid-cols-2">{calmeraPage.sourceLinks.slice(0, 5).map((source) => <SourceLink key={source.href} href={source.href} label={source.label} />)}</div>
            <div className="cyntara-wiki__callout"><strong>Evidence standard</strong><p>Current rates, world availability, client requirements, permissions, penalties, schedules, rewards, and player counts should be tied to an official page or dated operator announcement. When the official source leaves a field blank or a directory row conflicts with it, this guide keeps the conflict visible.</p></div>
          </section>

          <section id="media">
            <SectionHeading>Public Screenshot and Media Sources</SectionHeading>
            <p>The reviewed official site exposes world cards and the launcher presentation but no dedicated public screenshot gallery. This page does not mirror external artwork or client screenshots without permission. Use the official links below for attributable branding, world context, and installation information, and add player screenshots through the community contribution surface.</p>
            <div className="grid gap-3 md:grid-cols-2">{mediaSources.map(([label, href, note]) => <SourceLink key={href} href={href} label={label} note={note} />)}</div>
          </section>

          <DirectoryRecommendation />

          <section id="listings">
            <SectionHeading>Matching Live Listings</SectionHeading>
            {directoryServers.length ? <div className="grid gap-3">{directoryServers.map((server) => <Link key={server.id || `${server.name}-${server.ip}`} href={`/servers/${buildServerSlug(server)}`} className="rounded border border-black bg-white p-4 hover:no-underline"><div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"><div><h3 className="text-base font-bold text-black">{server.name}</h3><p className="text-sm text-black">{server.host || server.ip || 'Host pending'} - {server.version || 'Unknown client'} - {server.world_type || 'World type pending'} - {server.location || 'Location pending'}</p></div><div className="text-sm font-bold text-black">{Number(server.players_online || 0).toLocaleString()} online</div></div></Link>)}</div> : <p>No matching listing is available in the current directory response.</p>}
          </section>

          <section id="external-links">
            <SectionHeading>External Links</SectionHeading>
            <ul>{calmeraPage.sourceLinks.map((source) => <li key={source.href}><ExternalLink href={source.href}>{source.label}</ExternalLink></li>)}<li><ExternalLink href="https://evomanias.com">Evomanias - Recommended Open Tibia Server</ExternalLink></li></ul>
          </section>
        </article>

        <aside className="cyntara-wiki__sidebar">
          <div className="cyntara-wiki__infobox">
            <div className="cyntara-wiki__infobox-header">Calmera Servers</div>
            <ServerLogo server={{ name: 'Calmera', slug: 'calmera', host: 'calmera.com.br' }} size="profile" />
            <table><tbody>
              <tr><th>Official worlds</th><td>Anthera, Emporium</td></tr>
              <tr><th>Official PvP</th><td>Optional PvP</td></tr>
              <tr><th>Official rates</th><td>300x EXP / 3x loot</td></tr>
              <tr><th>Map profile</th><td>Global + VIP</td></tr>
              <tr><th>Primary directory host</th><td><code>servers.calmera.com.br:7171</code></td></tr>
              <tr><th>Directory profile</th><td>x400 / nPVP / 15.0</td></tr>
              <tr><th>Directory signal</th><td>766 / 2,000</td></tr>
              <tr><th>Official homepage signal</th><td>416 overall</td></tr>
              <tr><th>Core systems</th><td>CTC Launcher, instances, VIP maps, Emporium economy</td></tr>
              <tr><th>Profile status</th><td>Source-backed; current details need verification</td></tr>
              <tr><th>Website</th><td><a href="https://calmera.com.br/" target="_blank" rel="nofollow noopener noreferrer">calmera.com.br</a></td></tr>
            </tbody></table>
          </div>

          <div className="cyntara-wiki__callout"><strong>Why This Page Exists</strong><p>To turn a time-sensitive <strong>Calmera server list</strong> row into a durable world guide for Anthera, Emporium, rates, PvP, the CTC Launcher, activity, screenshots, and source-backed community context.</p><Link href="/submit-server">Claim or correct this listing</Link></div>

          <div className="rounded border border-gray-200 bg-white p-5">
            <h2 className="mb-3 text-base font-bold text-black">Related Directory Pages</h2>
            <div className="flex flex-wrap gap-2"><Link href="/servers/demolidores" className="rounded border border-black px-3 py-2 text-sm font-semibold text-black hover:no-underline">Demolidores</Link><Link href="/servers/cyntara" className="rounded border border-black px-3 py-2 text-sm font-semibold text-black hover:no-underline">Cyntara</Link><Link href="/servers/rubinot" className="rounded border border-black px-3 py-2 text-sm font-semibold text-black hover:no-underline">RubinOT</Link><Link href="/servers/amonot" className="rounded border border-black px-3 py-2 text-sm font-semibold text-black hover:no-underline">AmonOT</Link><Link href="/resources" className="rounded border border-black px-3 py-2 text-sm font-semibold text-black hover:no-underline">Resources</Link></div>
          </div>

          <div className="rounded border border-gray-200 bg-white p-5">
            <h2 className="mb-3 text-base font-bold text-black">Search These Terms</h2>
            <div className="flex flex-wrap gap-2">{calmeraPage.keywords.slice(0, 8).map((keyword) => <Link key={keyword} href={`/?search=${encodeURIComponent(keyword)}`} className="rounded border border-black px-3 py-2 text-sm font-semibold text-black hover:no-underline">{keyword}</Link>)}</div>
          </div>

          <div className="rounded border border-gray-200 bg-white p-5">
            <h2 className="mb-3 text-base font-bold text-black">Source trail</h2>
            <ul className="space-y-3">{calmeraPage.sourceLinks.map((source) => <li key={source.href}><ExternalLink href={source.href}>{source.label}</ExternalLink></li>)}</ul>
          </div>
        </aside>
      </div>

      <KeywordPageCommunity pageSlug="calmera" keyword="Calmera" />
    </main>
  );
}

function SectionHeading({ children }) {
  return <div className="cyntara-wiki__section-heading"><h2>{children}</h2></div>;
}

function Table({ headers, rows }) {
  return <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row) => <tr key={row[0]}>{row.map((value, index) => index === 0 ? <th key={value}>{value}</th> : <td key={value}>{index === 1 ? <strong>{value}</strong> : value}</td>)}</tr>)}</tbody></table></div>;
}

function FactCard({ label, text }) {
  return <div className="rounded border border-black bg-white p-4"><h3 className="text-base font-bold text-black">{label}</h3><p className="mt-2 text-sm leading-7 text-black">{text}</p></div>;
}

function ExternalLink({ href, children }) {
  const external = href.startsWith('http');
  return <a href={href} target={external ? '_blank' : undefined} rel={external ? 'nofollow noopener noreferrer' : undefined}>{children}</a>;
}

function SourceLink({ href, label, note }) {
  return <ExternalLink href={href}><span className="block rounded border border-black bg-white p-4 font-bold hover:no-underline"><span className="block">{label}</span>{note ? <span className="mt-2 block text-sm font-normal leading-6">{note}</span> : null}</span></ExternalLink>;
}
