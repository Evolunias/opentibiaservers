import Link from 'next/link';
import DirectoryRecommendation from '@/app/components/DirectoryRecommendation';
import KeywordPageCommunity from '@/app/components/KeywordPageCommunity';
import ServerLogo from '@/app/components/ServerLogo';
import { buildServerSlug } from '@/lib/server-paths';
import { buildCuratedJsonLd } from '@/lib/curated-pages';
import { fetchDirectoryServers } from '@/lib/directory-data';

export const sandotsPage = {
  slug: 'sandots',
  path: '/servers/sandots',
  type: 'server',
  title: 'SandOTS Server Guide: Rates, Reborn, PvP, Tasks & Client',
  h1: 'SandOTS: server status, how to play, and community',
  primaryKeyword: 'SandOTS',
  keywords: [
    'SandOTS',
    'SandOTS server',
    'SandOTS Open Tibia',
    'SandOTS 8.6',
    'SandOTS PVP',
    'SandOTS rates',
    'SandOTS reborn',
    'SandOTS task points',
    'SandOTS players online',
  ],
  metaDescription: 'SandOTS server guide covering its 8.6 PVP listing, x500 snapshot, Reborn system, tasks, dungeons, PvP rules, safe client path, and official sources.',
  updatedAt: '2026-07-26',
  sourceLinks: [
    { label: 'SandOTS official website', href: 'https://sandots.eu/' },
    { label: 'SandOTS official FAQ', href: 'https://sandots.eu/?subtopic=faq' },
    { label: 'SandOTS Reborn system', href: 'https://sandots.eu/?subtopic=reborn' },
    { label: 'SandOTS Task System', href: 'https://sandots.eu/?subtopic=task' },
    { label: 'SandOTS Dungeon System', href: 'https://sandots.eu/?subtopic=dungeon' },
    { label: 'SandOTS official rules', href: 'https://sandots.eu/?subtopic=regulamin' },
    { label: 'SandOTS downloads', href: 'https://sandots.eu/downloads' },
    { label: 'OpenTibiaServers directory', href: '/' },
  ],
  faqs: [
    {
      question: 'What is SandOTS?',
      answer: 'SandOTS, also branded as Dark Sand OTS, is an EVO-style Open Tibia server with fast attack and high-experience positioning. Its public systems include Reborn, Task Points, dungeons, daily bosses, a Hunting Arena, automatic loot, addon fountains, bounty hunters, wars, and house-floor customization.',
    },
    {
      question: 'What are the SandOTS rates and client version?',
      answer: 'The OpenTibiaServers snapshot lists SandOTS as x500 EXP, PVP, and client 8.6 with a 735 / 2,000 player snapshot. The official website describes the project as medium or high experience but does not publish a complete permanent rate table on the reviewed pages, so the listing values should be treated as time-sensitive discovery data.',
    },
    {
      question: 'When can a character use PvP on SandOTS?',
      answer: 'The official FAQ says PvP becomes available at level 5,000. It also records a 50-second PZ lock after attacking a player, a 3-minute PZ lock after killing a player, and the !pz command for checking remaining lock time.',
    },
    {
      question: 'How does the SandOTS Reborn system work?',
      answer: 'The official Reborn page lists Reborn levels at 40,000, 50,000, and 60,000. A character must be exactly at the required level and use !reborn tak. The character returns to level 2,000, gains a 5% damage bonus and additional access, and receives a 10% experience reduction for each Reborn.',
    },
    {
      question: 'How do SandOTS Task Points work?',
      answer: 'The Task System awards points for qualifying monster kills. The starting maximum is 500 points, !task shows the balance, !task info toggles point notices, !task maxpoints adds 500 capacity for the current capacity cost, and !task level exchanges the current level for 50 levels or 25 levels above level 10,000.',
    },
    {
      question: 'How do I download the SandOTS client safely?',
      answer: 'Use the Download link on the operator-controlled sandots.eu website, confirm the current client and account path, and read the rules before installing. The reviewed pages do not state a client filename, checksum, operating-system requirement, or protocol download detail, so copied mirrors should not be treated as official.',
    },
  ],
};

const contents = [
  ['overview', 'Overview & server identity'],
  ['facts', 'Reference facts'],
  ['progression', 'Rates, progression & Reborn'],
  ['systems', 'Tasks, dungeons & daily systems'],
  ['pvp', 'PvP, rules & account safety'],
  ['start', 'Client & how to start'],
  ['activity', 'Activity Signals'],
  ['record', 'Living Record'],
  ['faq', 'SandOTS FAQ'],
  ['sources', 'What Public Sources Already Tell Us'],
  ['media', 'Public Screenshot and Media Sources'],
  ['listings', 'Matching Live Listings'],
  ['external-links', 'External Links'],
];

const referenceRows = [
  ['Server name', 'SandOTS / Dark Sand OTS', 'The official site uses SandOTS.EU and Dark Sand OTS branding.'],
  ['Official domain', 'sandots.eu', 'The domain was reachable in the project’s source audit; use it for current rules, account, and client links.'],
  ['Listed host', 'sandots.eu:7171', 'Host and port recorded in the public directory snapshot. Confirm the active endpoint before connecting.'],
  ['Listing title', 'Sandots', 'Name shown by the OpenTibiaServers directory source.'],
  ['Protocol / PvP', '8.6 / PVP', 'Directory classification; the official pages reviewed do not provide a separate protocol specification.'],
  ['EXP snapshot', 'x500', 'Public listing value captured with the directory row, not a complete official stage table.'],
  ['Players snapshot', '735 / 2,000', 'A time-sensitive directory snapshot, not a guarantee of current online activity or capacity.'],
  ['Uptime snapshot', '99.78%', 'Public listing uptime signal captured with the row.'],
  ['Country signal', 'Poland', 'Directory region field; it should not be read as a verified operator location.'],
  ['Directory position', '#13', 'Position in the source listing at capture.'],
  ['Claim status', 'Unclaimed until verified', 'Official links and profile corrections should be owner- or manager-confirmed through the claim process.'],
  ['Open fields', 'Vocations, items, monsters', 'No complete source-backed catalogue for these areas was found in the reviewed public material.'],
];

const progressionRows = [
  ['Directory pace', 'x500 EXP', 'The listing snapshot labels the server x500; the official pages use broader medium/high-experience and EVO language.'],
  ['Reborn 1', 'Level 40,000', 'The character must reach the exact level before using !reborn tak.'],
  ['Reborn 2', 'Level 50,000', 'Experience above the threshold is not awarded until the required Reborn is completed.'],
  ['Reborn 3', 'Level 60,000', 'The official page lists this as the third documented Reborn threshold.'],
  ['Post-Reborn level', '2,000', 'Each Reborn resets the character to level 2,000.'],
  ['Reborn reward', '+5% damage', 'The page also describes stronger healing/manas and access to extra hunts, quests, and equipment.'],
  ['Reborn trade-off', '-10% experience per Reborn', 'Each completed Reborn reduces future experience gains by 10%.'],
];

const taskRows = [
  ['Starting capacity', '500 points', 'Every character begins with a maximum of 500 Task Points.'],
  ['!task', 'Status command', 'Shows current points and the maximum point limit.'],
  ['!task info', 'Toggle notices', 'Turns information about earned points on or off.'],
  ['!task maxpoints', '+500 capacity', 'Costs an amount equal to the current maximum capacity.'],
  ['!task level', 'Level exchange', 'Adds 50 levels at or below level 10,000, or 25 levels above level 10,000, for the current-level cost.'],
  ['Pointed monsters', '1–10 points listed', 'The introduction says 1–6 points, while the table includes 7–10; that inconsistency remains visible rather than flattened.'],
];

const activityRows = [
  ['OpenTibiaServers snapshot', '735 / 2,000', '99.78% uptime · x500 · PVP · 8.6', 'Captured 2026-07-26 and useful for discovery, not a live guarantee.'],
  ['Inventory record', 'Peak 735', 'sandots.eu:7171 · Poland · 8.6 · PVP', 'Recorded 2026-07-25 in the project inventory as a historical activity signal.'],
  ['Official homepage status', '0 players displayed', 'ONLINE status panel', 'A page-captured value that conflicts with the directory snapshot date and should not be merged into one current count.'],
];

const pvpRows = [
  ['PvP access', 'Level 5,000', 'The FAQ states that PvP is available from level 5,000.'],
  ['Private messages', 'Level 2,000', 'The FAQ states that private messages unlock from level 2,000.'],
  ['Attack PZ lock', '50 seconds', 'Use !pz to check remaining time.'],
  ['Kill PZ lock', '3 minutes', 'The longer lock applies after killing another player.'],
  ['Blessing protection', '99% certainty', 'Blesses do not guarantee that no item will drop; the FAQ recommends protective amulets as well.'],
  ['Same-IP abuse', 'Three or more characters', 'The rules prohibit abusive multi-client use for clearing an area or killing a player and reject VPN bypasses.'],
  ['Reports', 'Ctrl + R', 'Use the in-game Report Rule Violations function and provide evidence.'],
];

const dungeonRows = [
  ['Dungeon access', 'Level 4,000+', 'The entrance is in Ice City, in a hidden cave to the northwest.'],
  ['Party size', '4 players', 'The official guide requires four people for entry.'],
  ['Entry items', '4 icicles', 'Icicles come from Ice Humans and Yetungs and melt quickly.'],
  ['Objective', 'Rooms, monsters, boss', 'Clear every room, kill the required monsters, and defeat the boss.'],
  ['Reward', 'Frozen Starlight', 'Claim the reward after the boss, then exchange it with the Dungeon Rewards NPC in the temple.'],
];

const huntingRows = [
  ['Entry', '1 Hunting Fire', 'Carry the item in the backpack when entering from the Temple Hunting Arena teleport.'],
  ['Room time', '20 minutes', 'The player is removed when the period ends and needs another Hunting Fire to re-enter.'],
  ['Daily limit', '36 Hunting Fires', 'The official page lists a maximum daily use.'],
  ['Monster cycle', 'One per trigger', 'A special tile in the upper-left summons the next monster after a one-second interval.'],
  ['Rewards', 'Not specified', 'The reviewed page describes experience hunting but does not publish a reward table or multiplier.'],
];

const rulesRows = [
  ['Client automation', 'FAQ says the built-in bot may be used', 'The regulations still prohibit exploiting or concealing bugs for profit; use the current rules as the authority.'],
  ['Blocking players', 'Punishable', 'Unkillable defenses, map access blocking, PZ exits, house trapping, and body spamming carry escalating penalties.'],
  ['Real-money trading', 'Prohibited', 'Accounts, characters, houses, items, and points may not be traded for real-world money.'],
  ['Account recovery', 'Limited', 'The FAQ and rules say administration does not recover hacked accounts or lost items; protect credentials and recovery data.'],
  ['Inactive characters', '14 days', 'The regulations say inactive characters may enter the unused-character sale list and houses may be cleared.'],
];

const mediaSources = [
  ['SandOTS official website', 'https://sandots.eu/', 'Official branding, news, status panel, and navigation links.'],
  ['SandOTS Facebook fan page', 'https://www.facebook.com/darksandots', 'Public community channel linked from the official site; use it as a source lead, not as a substitute for rules.'],
  ['SandOTS Discord', 'https://discord.gg/xhydY3R7WF', 'Public community invite linked by the official site; current membership and activity can change.'],
  ['Official Open Graph image', 'https://sandots.eu/images/new/war.PNG', 'A public image URL identified in source research; this page links to it rather than mirroring it without permission.'],
];

export default async function SandotsWikiPage() {
  const directoryData = await fetchDirectoryServers({
    page: 1,
    pageSize: 8,
    search: 'SandOTS',
    onlineOnly: false,
  });
  const directoryServers = Array.isArray(directoryData?.servers) ? directoryData.servers.filter(Boolean) : [];
  const jsonLd = buildCuratedJsonLd(sandotsPage);

  return (
    <main className="cyntara-wiki min-h-screen" data-server-slug="sandots">
      {jsonLd.map((entry, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(entry) }} />
      ))}

      <header className="cyntara-wiki__header">
        <h1>{sandotsPage.h1}</h1>
        <small>From OpenTibiaServers Wiki, the primary Open Tibia server directory</small>
      </header>

      <div className="cyntara-wiki__grid">
        <article className="cyntara-wiki__content">
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="min-w-0 flex-1">
              <p><strong><em><u>SandOTS</u></em></strong>, also presented as <strong>Dark Sand OTS</strong>, is an EVO-style <strong>Open Tibia server</strong> with fast attack and a large set of progression systems. The official site documents <strong>Reborn</strong>, Task Points, dungeons, daily bosses, a Hunting Arena, automatic loot, addon fountains, bounty hunters, wars, and house-floor customization.</p>
              <p>This <strong><em>SandOTS server guide</em></strong> separates the public directory snapshot from official gameplay documentation. The listing records <strong>sandots.eu:7171</strong> as an 8.6 PVP server with an x500 label, while official pages provide the detailed rules and system requirements that a new player should verify before downloading a client or committing to a character.</p>
            </div>
            <div className="w-full shrink-0 md:w-64"><ServerLogo server={{ name: 'SandOTS', slug: 'sandots', host: 'sandots.eu' }} size="profile" /></div>
          </div>

          <nav className="cyntara-wiki__toc" aria-label="Table of Contents">
            <h2>Contents</h2>
            <ol>{contents.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol>
          </nav>

          <section id="overview">
            <SectionHeading>Overview &amp; server identity</SectionHeading>
            <p><strong><em><u>SandOTS</u></em></strong> is best understood as a fast-progression EVO world rather than a conventional low-rate 8.6 replica. Its official public pages emphasize quick combat, high or medium experience positioning, and a loop built around repeated systems: level milestones, Reborn resets, Task Points, daily encounters, dungeons, and collectible bonuses.</p>
            <p>The name appears in two useful forms: <strong>SandOTS</strong> in the directory and <strong>Dark Sand OTS</strong> in the official site’s branding and community links. That distinction helps with search intent: players looking for a <strong><em>SandOTS download</em></strong>, <strong>SandOTS rates</strong>, or <strong>SandOTS players online</strong> should confirm that the linked domain is still the operator-controlled source and not a copied mirror.</p>
            <div className="cyntara-wiki__callout"><strong>Evidence boundary</strong><p>The directory snapshot and official pages answer different questions. The listing gives a dated host, version, PvP label, rates label, uptime, and activity signal; the official pages explain systems and rules. Neither surface alone proves the current client build, live population, or every system’s present availability.</p></div>
          </section>

          <section id="facts">
            <SectionHeading>Reference facts</SectionHeading>
            <p>These values preserve the current profile’s source trail. Snapshot fields are intentionally labeled as such so a future owner claim or refreshed directory record can update them without rewriting historical context.</p>
            <Table headers={['Field', 'Recorded value', 'Evidence and context']} rows={referenceRows} />
          </section>

          <section id="progression">
            <SectionHeading>Rates, progression &amp; Reborn</SectionHeading>
            <p>The public listing places <strong>SandOTS at x500 EXP</strong>, but the official website uses broader “medium exp,” “high exp,” and EVO language and does not expose a complete permanent experience table on the reviewed pages. Treat the listing multiplier as a discovery label, then check the official site for event modifiers and current configuration.</p>
            <h3>Published Reborn thresholds</h3>
            <Table headers={['Stage', 'Requirement or value', 'Player context']} rows={progressionRows} />
            <p>The <a href="https://sandots.eu/?subtopic=reborn" target="_blank" rel="nofollow noopener noreferrer">official Reborn guide</a> says that the character must have the exact threshold level. If a boss or other activity pushes the character beyond it, the guide instructs the player to die, regain the exact level, and then use <code>!reborn tak</code>. This makes Reborn planning part of the progression route rather than an automatic level reset.</p>
            <div className="cyntara-wiki__callout"><strong>Trade-off to understand</strong><p>Each Reborn adds power and access but reduces experience gains by 10%. Players comparing <strong><em>SandOTS Reborn</em></strong> builds should therefore verify the current damage, healing, mana, equipment, quest, and hunting-area effects before treating the 5% bonus as the full reward.</p></div>
          </section>

          <section id="systems">
            <SectionHeading>Tasks, dungeons &amp; daily systems</SectionHeading>
            <p>SandOTS uses several repeatable systems to give a high-level character goals beyond ordinary hunting. The official pages are unusually useful for searchers because they publish commands and entry conditions, while also leaving some reward tables and cooldown details open.</p>
            <h3>Task Points and commands</h3>
            <Table headers={['System or command', 'Published value', 'How to read it']} rows={taskRows} />
            <p>Task Points come from qualifying monster kills and can be exchanged for bonuses. The official table lists point values from 1 through 10 even though its introduction describes a 1–6 range; that inconsistency is recorded here as a source-quality note. Do not assume inactive or commented-out reward examples are live rewards.</p>
            <h3>Dungeon System</h3>
            <Table headers={['Dungeon field', 'Official value', 'Context']} rows={dungeonRows} />
            <p>The Dungeon requires a coordinated four-player group and quickly melting icicles, so it is a party activity rather than a solo shortcut. Frozen Starlight is taken to the temple’s Dungeon Rewards NPC after the boss. The official page does not publish every reward variant, cost, or cooldown.</p>
            <h3>Daily bosses and Hunting Arena</h3>
            <p>The official Daily Boss page documents level bands of 15,000–25,000 for Ghazdomor, 25,000–35,000 for Gormorgon, and 35,000+ for Zorahellor. It requires four players on different IP addresses and describes the encounter as daily, but does not state a reset timezone. A separate evening boss is advertised on the FAQ at <strong>20:30</strong>, while a VIP boss requires four people.</p>
            <Table headers={['Hunting Arena field', 'Official value', 'Context']} rows={huntingRows} />
          </section>

          <section id="pvp">
            <SectionHeading>PvP, rules &amp; account safety</SectionHeading>
            <p><strong><em><u>SandOTS PvP</u></em></strong> is not available from the first level. The official FAQ records a level 5,000 unlock, a 50-second lock after attacking, a 3-minute lock after killing, and <code>!pz</code> for checking the remaining protection-zone timer.</p>
            <Table headers={['Rule area', 'Recorded value', 'Player context']} rows={pvpRows} />
            <p>The regulations also cover blocking exits, trapping characters in houses, body spamming, impersonation, false reports, public-channel misuse, and real-money trading. Their multi-client rule is specific: abusive use of three or more characters from one IP for clearing an experience area or killing a player is punishable, and VPN bypasses are not accepted.</p>
            <Table headers={['Safety or conduct area', 'Official position', 'Practical reading']} rows={rulesRows} />
            <div className="cyntara-wiki__callout"><strong>Account and download safety</strong><p>The FAQ says a bot is built into the client and may be used, but that does not authorize exploiting bugs, concealing bugs for profit, sharing credentials, or using an unofficial client. Use the operator-controlled download path and read the current rules before installing or funding an account.</p></div>
          </section>

          <section id="start">
            <SectionHeading>Client &amp; how to start</SectionHeading>
            <p>The safest first session begins with source verification, not a random launcher. Open the official <a href="https://sandots.eu/" target="_blank" rel="nofollow noopener noreferrer">SandOTS website</a>, select its current download and account paths, and compare the active connection information with the <strong>sandots.eu:7171</strong> listing record.</p>
            <ol>
              <li>Read the current FAQ and <a href="https://sandots.eu/?subtopic=regulamin" target="_blank" rel="nofollow noopener noreferrer">regulations</a> before making a character.</li>
              <li>Use only the official <a href="https://sandots.eu/downloads" target="_blank" rel="nofollow noopener noreferrer">download page</a> or the current download link exposed by the operator’s site.</li>
              <li>Confirm the client version, login host, account recovery path, and any event or rate modifiers on the day you start.</li>
              <li>Plan the early route around daily missions, Task Points, the level 4,000 Dungeon, and the level 5,000 PvP/profession milestone.</li>
              <li>Protect the account yourself: the rules disclaim responsibility for hacked accounts, lost items, and some server-error losses.</li>
            </ol>
            <div className="grid gap-4 md:grid-cols-2">
              <FactCard label="Good fit if" text="You want a fast EVO loop with high level milestones, Reborn resets, party dungeons, daily bosses, task progression, and open PvP after level 5,000." />
              <FactCard label="Check first" text="Current client and host, exact rate table, reset schedule, bot and multi-client rules, reward costs, shop policy, account recovery, and official community channels." />
            </div>
          </section>

          <section id="activity">
            <SectionHeading>Activity Signals</SectionHeading>
            <p>Searchers asking whether <strong><em>SandOTS is online</em></strong> should compare timestamps and source types instead of treating every number as one live truth. The directory snapshot shows strong historical activity, while the official homepage status panel was captured with a different value.</p>
            <Table headers={['Source signal', 'Activity value', 'Profile context', 'Interpretation']} rows={activityRows} />
            <div className="cyntara-wiki__callout"><strong>Snapshot, not promise</strong><p>The 735-player figure and 99.78% uptime belong to a dated public listing capture. Population, capacity, uptime, and host availability can change between captures; use the official site and refreshed directory row immediately before playing.</p></div>
          </section>

          <section id="record">
            <SectionHeading>Living Record</SectionHeading>
            <p>This page is meant to preserve a useful <strong>SandOTS community record</strong> without turning every copied description into a fact. Public updates show an evolving project: the official homepage lists recent changes including house-floor customization through <code>!floor</code>, a Rare Item shop addition, a Sand City access fix, an Easter Item, and a SUB Points reward fix.</p>
            <div className="grid gap-4 md:grid-cols-3">
              <FactCard label="Current identity" text="EVO / fast-attack positioning with Reborn and a large set of named systems." />
              <FactCard label="Dated listing" text="8.6, PVP, x500, Poland signal, 735 / 2,000 players, and 99.78% uptime in the captured row." />
              <FactCard label="Open documentation" text="Exact vocations, item catalogue, monster catalogue, full rate table, and owner confirmation still need direct sources." />
            </div>
            <p>Owners and players can improve the record through the <Link href="/submit-server">server submission and claim flow</Link>, <Link href="/community_archive">community archive</Link>, notes, screenshots, and dated corrections. A source-backed page should keep old snapshots visible while clearly labeling what has changed.</p>
          </section>

          <section id="faq">
            <SectionHeading>SandOTS FAQ</SectionHeading>
            <div className="space-y-4">
              {sandotsPage.faqs.map((faq) => <details key={faq.question} className="rounded border border-black bg-white p-4"><summary className="cursor-pointer text-base font-bold text-black">{faq.question}</summary><p className="mt-3 text-sm leading-7 text-black">{faq.answer}</p></details>)}
            </div>
          </section>

          <section id="sources">
            <SectionHeading>What Public Sources Already Tell Us</SectionHeading>
            <p>The strongest current evidence comes from two layers. The official site supplies the FAQ, Reborn, Task System, Dungeon, Daily Boss, Hunting Arena, downloads, and regulations. The OpenTibiaServers project inventory supplies the dated host, version, PvP, region, player, uptime, and rank signals. Official pages should win whenever a current gameplay rule conflicts with an older directory label.</p>
            <div className="grid gap-3 md:grid-cols-2">
              {sandotsPage.sourceLinks.slice(0, 7).map((source) => <SourceLink key={source.href} href={source.href} label={source.label} />)}
            </div>
            <div className="cyntara-wiki__callout"><strong>Verification standard</strong><p>Claims about rates, rewards, client files, schedules, or penalties should remain tied to an official page, a dated operator announcement, or clearly attributed community evidence. If a field is not documented, this profile keeps it open rather than filling it from assumptions about another 8.6 server.</p></div>
          </section>

          <section id="media">
            <SectionHeading>Public Screenshot and Media Sources</SectionHeading>
            <p>SandOTS has public branding and community channels, but this page does not copy external artwork into the application. Use these source links for attribution and verification; only mirror media when the owner, contributor, or license gives permission.</p>
            <div className="grid gap-3 md:grid-cols-2">{mediaSources.map(([label, href, note]) => <SourceLink key={href} href={href} label={label} note={note} />)}</div>
          </section>

          <DirectoryRecommendation />

          <section id="listings">
            <SectionHeading>Matching Live Listings</SectionHeading>
            {directoryServers.length ? <div className="grid gap-3">{directoryServers.map((server) => <Link key={server.id || `${server.name}-${server.ip}`} href={`/servers/${buildServerSlug(server)}`} className="rounded border border-black bg-white p-4 hover:no-underline"><div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"><div><h3 className="text-base font-bold text-black">{server.name}</h3><p className="text-sm text-black">{server.version || 'Unknown client'} - {server.world_type || 'World type pending'} - {server.location || 'Location pending'}</p></div><div className="text-sm font-bold text-black">{Number(server.players_online || 0).toLocaleString()} online</div></div></Link>)}</div> : <p>No matching listing is available in the current directory response.</p>}
          </section>

          <section id="external-links">
            <SectionHeading>External Links</SectionHeading>
            <ul>
              {sandotsPage.sourceLinks.map((source) => <li key={source.href}><ExternalLink href={source.href}>{source.label}</ExternalLink></li>)}
              <li><ExternalLink href="https://evomanias.com">Evomanias - Recommended Open Tibia Server</ExternalLink></li>
            </ul>
          </section>
        </article>

        <aside className="cyntara-wiki__sidebar">
          <div className="cyntara-wiki__infobox">
            <div className="cyntara-wiki__infobox-header">SandOTS</div>
            <ServerLogo server={{ name: 'SandOTS', slug: 'sandots', host: 'sandots.eu' }} size="profile" />
            <table><tbody>
              <tr><th>Website</th><td><a href="https://sandots.eu/" target="_blank" rel="nofollow noopener noreferrer">sandots.eu</a></td></tr>
              <tr><th>Host</th><td><code>sandots.eu:7171</code></td></tr>
              <tr><th>Protocol</th><td>8.6 listing signal</td></tr>
              <tr><th>EXP / PvP</th><td>x500 / PVP snapshot</td></tr>
              <tr><th>Player signal</th><td>735 / 2,000</td></tr>
              <tr><th>Uptime signal</th><td>99.78%</td></tr>
              <tr><th>Region signal</th><td>Poland</td></tr>
              <tr><th>Core systems</th><td>Reborn, tasks, dungeons, bosses, arena</td></tr>
              <tr><th>Profile status</th><td>Source-backed; current details need verification</td></tr>
            </tbody></table>
          </div>

          <div className="cyntara-wiki__callout"><strong>Why This Page Exists</strong><p>To turn a time-sensitive <strong>SandOTS server list</strong> row into a durable guide for rates, Reborn thresholds, Task Points, PvP rules, client safety, screenshots, and source-backed updates.</p><Link href="/submit-server">Claim or correct this listing</Link></div>

          <div className="rounded border border-gray-200 bg-white p-5">
            <h2 className="mb-3 text-base font-bold text-black">Related Directory Pages</h2>
            <div className="flex flex-wrap gap-2">
              <Link href="/servers/demolidores" className="rounded border border-black px-3 py-2 text-sm font-semibold text-black hover:no-underline">Demolidores</Link>
              <Link href="/servers/cyntara" className="rounded border border-black px-3 py-2 text-sm font-semibold text-black hover:no-underline">Cyntara</Link>
              <Link href="/servers/rubinot" className="rounded border border-black px-3 py-2 text-sm font-semibold text-black hover:no-underline">RubinOT</Link>
              <Link href="/servers/amonot" className="rounded border border-black px-3 py-2 text-sm font-semibold text-black hover:no-underline">AmonOT</Link>
              <Link href="/resources" className="rounded border border-black px-3 py-2 text-sm font-semibold text-black hover:no-underline">Resources</Link>
            </div>
          </div>

          <div className="rounded border border-gray-200 bg-white p-5">
            <h2 className="mb-3 text-base font-bold text-black">Search These Terms</h2>
            <div className="flex flex-wrap gap-2">
              {sandotsPage.keywords.slice(0, 7).map((keyword) => <Link key={keyword} href={`/?search=${encodeURIComponent(keyword)}`} className="rounded border border-black px-3 py-2 text-sm font-semibold text-black hover:no-underline">{keyword}</Link>)}
            </div>
          </div>

          <div className="rounded border border-gray-200 bg-white p-5">
            <h2 className="mb-3 text-base font-bold text-black">Source trail</h2>
            <ul className="space-y-3">{sandotsPage.sourceLinks.map((source) => <li key={source.href}><ExternalLink href={source.href}>{source.label}</ExternalLink></li>)}</ul>
          </div>
        </aside>
      </div>

      <KeywordPageCommunity pageSlug="sandots" keyword="SandOTS" />
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
