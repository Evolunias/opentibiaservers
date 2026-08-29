import ServerLogo from '@/app/components/ServerLogo';

const contents = [
  ['overview', 'Overview & server identity'],
  ['facts', 'Reference facts & activity'],
  ['start', 'How to start on PC or Android'],
  ['rates', 'EXP stages & progression'],
  ['pvp', 'PvP rules & multiclient limits'],
  ['systems', 'Events, systems & economy'],
  ['community', 'Cyleriopedia, community & support'],
  ['history', 'History & no-reset positioning'],
  ['faq', 'Cyleria FAQ'],
  ['sources', 'Sources & verification'],
  ['external-links', 'External links'],
];

const facts = [
  ['Server name', 'Cyleria OTS / Cyleria 8.60', 'The official site presents Cyleria as a Polish Open Tibia Server using the 8.60 client family.'],
  ['Connection host', 'go.cyleria.pl', 'The official Server Info page identifies this host; the required port should be confirmed in the current download or client instructions.'],
  ['Client access', 'Windows / PC and Android', 'Official onboarding material describes computer and smartphone play through Cyleria client paths.'],
  ['Region and language', 'Poland · Polish community', 'The site, FAQ, and Discord discovery profile are Polish-facing. Physical hosting location is not established by these sources.'],
  ['Current population snapshot', '929 online on official capture', 'A volatile site reading reported by the official page during research; it should not be treated as a permanent player count.'],
  ['History signals', 'Since 2013 · online phase from 7 November 2020', 'Both statements appear in official material but may describe different phases of the project.'],
  ['Profile status', 'Official-source-backed reference', 'Core systems and onboarding details below are attributed to official Cyleria pages; live rates and schedules can change.'],
];

const stages = [
  ['10–50', '130×', '390×'], ['51–100', '100×', '300×'], ['101–200', '50×', '150×'], ['201–300', '25×', '75×'],
  ['301–400', '20×', '60×'], ['401–500', '8×', '24×'], ['501–600', '4×', '12×'], ['601–650', '2×', '6×'],
  ['651–700', '1.5×', '4.5×'], ['701–1,500', '1×', '3×'], ['1,501–2,500', '0.5×', '1.5×'], ['2,501–5,000', '0.5×', '1×'],
  ['5,001–6,000', '0.25×', '0.25×'], ['6,001+', '0.1×', '0.1×'],
];

const systems = [
  ['Tower Siege', 'A scheduled PvP event in a MOBA-style format, shown at 19:00 on Wednesdays and Saturdays. Official material says level-1,000 participants receive level 1,000 and three lives during the event; the objective is to destroy the opposing towers and earn PvP Tokens.'],
  ['Weekend EXP Event', 'The official experience table compares Standard and EXP Event values. The event is described as running from Friday through Sunday or longer, making weekend timing important to progression planning.'],
  ['Crystal Mine & Czasoprzestrzen', 'The official event schedule lists Crystal Mine on Tuesdays and Thursdays at 17:00 and 22:00, plus Czasoprzestrzen among rotating events. Check the live schedule for changes.'],
  ['Raids and bosses', 'The schedule names recurring raids and stones such as Zle Oko, Cylerian, Young Earth Stone, Young Fire Stone, Atrox, Young Ice Stone, and Abitanski Topornik, plus Boruta, Bekart Wojny, and Rokita on selected days.'],
  ['Daily Points & NPC Discount', 'Both are documented as rotating events. Their current reward tables, discount percentages, and rotation rules should be checked in the official event pages.'],
  ['Marketplace and Char Bazaar', 'Cyleria documents private shops, item pricing, and Char Bazaar interfaces. A featured character offer costs 250 SP and renews visibility for seven days; general transfer rules remain limited in the published description.'],
  ['No-reset progression', 'Official positioning emphasizes long-term play without character resets, alongside level rewards, starting gifts, free VIP, houses from level 600, and guild access from level 200.'],
  ['Cyleriopedia', 'The in-site knowledge base organizes exp areas, monsters, items, currencies, NPCs, outfits, commands, spells, events, systems, quests, tips, and client-bot guides.'],
];

const links = [
  ['Cyleria official website', 'https://cyleria.pl/'],
  ['Cyleria Server Info', 'https://cyleria.pl/?subtopic=serverinfo'],
  ['Cyleria FAQ', 'https://cyleria.pl/?subtopic=faq'],
  ['Cyleria rules and PvP rules', 'https://cyleria.pl/?subtopic=tibiarules#section4'],
  ['Cyleriopedia', 'https://cyleria.pl/?subtopic=cyleriopedia'],
  ['Cyleria downloads', 'https://cyleria.pl/?subtopic=downloads'],
  ['Cyleria event schedule', 'https://cyleria.pl/?subtopic=tower_siege'],
  ['Cyleria Discord', 'https://discord.com/invite/e7zJ8yKA'],
  ['Cyleria Facebook', 'https://www.facebook.com/cyleriapl'],
  ['Cyleria TikTok', 'https://www.tiktok.com/@cyleria.pl'],
  ['Cyleria YouTube', 'https://www.youtube.com/@cyleria_pl?sub_confirmation=1'],
  ['OpenTibiaServers directory', '/'],
  ['OpenTibiaServers knowledge base', '/knowledge'],
];

export default function CyleriaWikiPage() {
  return (
    <main className="cyntara-wiki min-h-screen" data-server-slug="cyleria">
      <header className="cyntara-wiki__header"><h1>Cyleria: Polish 8.60 OTS, mobile client, events and no-reset progression</h1><small>From OpenTibiaServers Wiki, the primary Open Tibia server directory</small></header>
      <div className="cyntara-wiki__grid">
        <article className="cyntara-wiki__content">
          <div className="flex flex-col gap-6 md:flex-row md:items-start"><div className="min-w-0 flex-1"><p><strong>Cyleria</strong> is a Polish <strong>Open Tibia server</strong> associated with the classic 8.60 client, PC and Android access, long-term <em>no-reset progression</em>, scheduled events, and an unusually broad player information layer. The official site documents onboarding, PvP limits, experience stages, a knowledge base, market tools, and recurring activities.</p><p>This <strong>Cyleria Wiki profile</strong> is designed for players searching for the official website, <strong>Cyleria mobile client</strong>, rates, rules, Tower Siege, events, and community support. <u>Confirm live connection instructions, current client files, rules, and schedules on the official site before installing or funding an account.</u></p></div><div className="w-full shrink-0 md:w-64"><ServerLogo server={{ name: 'Cyleria', slug: 'cyleria', host: 'go.cyleria.pl' }} size="profile" /></div></div>
          <nav className="cyntara-wiki__toc" aria-label="Table of contents"><h2>Contents</h2><ol>{contents.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol></nav>

          <section id="overview"><SectionHeading>Overview &amp; server identity</SectionHeading><p><strong>Cyleria OTS</strong> presents itself as a stable Polish server for players who want the convenience of a custom PC/mobile client without a seasonal wipe. Its official material combines a classic 8.60 identity with contemporary service features: a searchable Cyleriopedia, event calendar, market tools, character offers, level rewards, Discord support, and mobile play.</p><p>The public identity is strongest around <em>Cyleria 8.60</em>, the host <code>go.cyleria.pl</code>, and Polish-language community access. The official site also distinguishes historical statements about being online since 2013 from a stated online phase beginning 7 November 2020; this profile preserves both signals rather than forcing an unexplained single launch date.</p><div className="cyntara-wiki__callout"><strong>What makes Cyleria different</strong><p>Cyleria is not only a protocol and player-count row. Its high-intent search topics are practical: whether Android works, whether bots and multiclienting are allowed, how long progression lasts, which events run on which days, and where official rules and guides live.</p></div></section>

          <section id="facts"><SectionHeading>Reference facts &amp; activity</SectionHeading><p>The following facts are drawn from official Cyleria pages and clearly labeled activity context. Population, uptime, event times, and client links are operational details that can change.</p><DataTable headers={['Field', 'Recorded value', 'Evidence & context']} rows={facts} /></section>

          <section id="start"><SectionHeading>How to start on PC or Android</SectionHeading><p>The official FAQ describes both computer and smartphone access. Start from the <a href="https://cyleria.pl/?subtopic=downloads" target="_blank" rel="nofollow noopener noreferrer">official downloads page</a>, not a reposted client. Verify whether the current build is the PC client, Android application, or a supported 8.60 client plus IP changer before logging in.</p><ol><li>Read the current <a href="https://cyleria.pl/?subtopic=faq" target="_blank" rel="nofollow noopener noreferrer">Cyleria FAQ</a> and Server Info page.</li><li>Download the current Windows or Android client only through the official domain.</li><li>Confirm the active host, port, client build, and any launcher update instructions.</li><li>Review bot, multiclient, PvP, account, payment, and character-market rules.</li><li>Join the official Discord for current announcements and support, then compare the experience with other <a href="/">Open Tibia servers</a>.</li></ol><div className="cyntara-wiki__callout"><strong>Client safety</strong><p>Do not disable antivirus protections or use an unrelated mirror to force an old client to run. If a download path or checksum is unclear, ask through the official support channels.</p></div></section>

          <section id="rates"><SectionHeading>EXP stages &amp; progression</SectionHeading><p>The official <strong>Cyleria rates</strong> page describes medium progression with 10× magic and 20× skill rates, plus a stage-based EXP curve. The weekend <em>EXP Event</em> multiplies many early and mid-level stages, so a character’s pace depends heavily on when it is played.</p><DataTable headers={['Level range', 'Standard EXP', 'EXP Event']} rows={stages} /><p>The published table reaches 0.1× from level 6,001 onward. This tapering model, combined with the stated <strong>no-reset Cyleria progression</strong>, favors players who enjoy long-term character investment rather than a short seasonal race. Loot, spawn, regeneration, rune, and ammunition details should be confirmed on the current Server Info page.</p></section>

          <section id="pvp"><SectionHeading>PvP rules &amp; multiclient limits</SectionHeading><p><strong>Cyleria PvP</strong> is enabled, with protection and skull settings documented in the official material. Characters are protected up to level 1,000; the published settings list a two-minute PZ block, 10-minute white skull, and 48-hour red skull.</p><div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr><th>Rule</th><th>Published value</th></tr></thead><tbody><tr><th>Level protection</th><td><strong>Up to level 1,000</strong></td></tr><tr><th>Red skull</th><td>48 hours · 25 kills/day · 100/week · 350/month</td></tr><tr><th>Black skull</th><td>96 hours · 50 kills/day · 200/week · 700/month</td></tr><tr><th>White skull / PZ block</th><td>10 minutes / 2 minutes</td></tr><tr><th>Multiclient</th><td>Up to 4 clients for play; maximum 2 characters in PvP (main + MC)</td></tr></tbody></table></div><p><u>Use the official rules page for the current enforcement interpretation</u>. Bot policy, account sharing, punishment details, war conduct, and any event-specific restrictions should not be inferred from the summary above.</p></section>

          <section id="systems"><SectionHeading>Events, systems &amp; economy</SectionHeading><p>Cyleria’s system mix is a major reason players search for more than its IP address. The official site exposes recurring content, market documentation, and guides that create several progression loops outside ordinary hunting.</p><div className="grid gap-4 md:grid-cols-2">{systems.map(([name, detail]) => <FactCard key={name} label={name} text={detail} />)}</div></section>

          <section id="community"><SectionHeading>Cyleriopedia, community &amp; support</SectionHeading><p>The official <strong>Cyleriopedia</strong> is a searchable knowledge base about the kingdom of Cyleria. Its categories cover hunting areas, monsters, items, currencies, NPCs, outfits, commands, spells, recurring and seasonal events, gameplay systems, locations, quests, tips, and client-bot setup. Frequently viewed guides include an EXP-location calculator, stamina, gold ingot, Private Shops, item pricing, Daily Points Event, and NPC Discount.</p><p>The public Discord discovery page reports a large Polish community, while the official contact flow points players toward Discord, Messenger, in-game Ctrl+R reporting, and the contact page. Community counts are volatile; use the official invite and current site notices rather than treating an embedded member count as permanent.</p><div className="grid gap-4 md:grid-cols-2"><FactCard label="Best for" text="Polish-speaking players who want an 8.60 world with Android access, no-reset continuity, events, extensive guides, and long-term community systems." /><FactCard label="Verify first" text="Current download, host and port, bot rules, PvP enforcement, market protections, event rewards, and support response times." /></div></section>

          <section id="history"><SectionHeading>History &amp; no-reset positioning</SectionHeading><p>Cyleria’s official material says the project has roots reaching back to <strong>2013</strong> and separately displays an online-start date of <strong>7 November 2020</strong>. Those statements may represent different versions or phases. The safe editorial interpretation is that Cyleria claims a long-running identity while the precise continuity should be confirmed through dated announcements.</p><p>The no-reset promise is central to the server’s player fit. Level rewards, starting gifts, free VIP, houses from level 600, guild access from level 200, rare in-game drops, and long-term event participation all matter more when characters are not routinely wiped.</p></section>

          <section id="faq"><SectionHeading>Cyleria FAQ</SectionHeading><div className="grid gap-4"><FactCard label="What is Cyleria?" text="Cyleria is a Polish Open Tibia Server associated with client 8.60, PC and Android play, Open PvP, staged EXP, events, a searchable Cyleriopedia, and no-reset progression." /><FactCard label="Can I play Cyleria on Android?" text="Yes. Official onboarding material describes smartphone/Android access. Use the official downloads page and confirm the current app or client instructions." /><FactCard label="What are the Cyleria EXP rates?" text="The official table ranges from 130× at levels 10–50 to 0.1× from level 6,001 onward, with higher EXP Event values on many weekend stages. Magic is listed at 10× and skills at 20× in the reviewed Server Info material." /><FactCard label="Does Cyleria reset characters?" text="Official positioning emphasizes long-term play without resets. Verify the current policy in official announcements before committing to a character." /><FactCard label="How many clients can I use?" text="The published PvP summary allows up to four clients for play, but only two characters may participate in PvP: the main character and one MC. Check the complete current rules for exceptions." /></div></section>

          <section id="sources"><SectionHeading>Sources &amp; verification</SectionHeading><p>This profile prioritizes official Cyleria pages for technical, onboarding, rate, event, and rules claims. Discord and social links provide community discovery, while the OpenTibiaServers directory helps compare Cyleria with other worlds such as <a href="/servers/demolidores">Demolidores</a>, <a href="/servers/cyntara">Cyntara</a>, and <a href="/servers/rubinot">RubinOT</a>.</p><div className="grid gap-3 md:grid-cols-2">{links.slice(0, 8).map(([label, href]) => <SourceLink key={href} href={href} label={label} />)}</div><div className="cyntara-wiki__callout"><strong>Evidence standard</strong><p>Current claims should be rechecked against the official website, dated announcement, or current in-game evidence. Search snippets and community discovery are useful leads, but do not replace the operator’s live rules or download instructions.</p></div></section>

          <section id="external-links"><SectionHeading>External links</SectionHeading><ul>{links.map(([label, href]) => <li key={href}><ExternalLink href={href}>{label}</ExternalLink></li>)}</ul></section>
        </article>
        <aside className="cyntara-wiki__sidebar"><div className="cyntara-wiki__infobox"><div className="cyntara-wiki__infobox-header">Cyleria</div><ServerLogo server={{ name: 'Cyleria', slug: 'cyleria', host: 'go.cyleria.pl' }} size="profile" /><table><tbody><tr><th>Website</th><td><a href="https://cyleria.pl/" target="_blank" rel="nofollow noopener noreferrer">cyleria.pl</a></td></tr><tr><th>Host</th><td><code>go.cyleria.pl</code></td></tr><tr><th>Client</th><td>8.60</td></tr><tr><th>Platforms</th><td>Windows / Android</td></tr><tr><th>Region</th><td>Poland</td></tr><tr><th>PvP</th><td>Open PvP</td></tr><tr><th>Magic / skill</th><td>10× / 20×</td></tr><tr><th>EXP profile</th><td>130× to 0.1× staged</td></tr><tr><th>Progression</th><td>No-reset positioning</td></tr><tr><th>Tower Siege</th><td>Wed/Sat · 19:00</td></tr><tr><th>Profile status</th><td>Official-source-backed</td></tr></tbody></table></div><div className="cyntara-wiki__callout"><strong>Before downloading</strong><p>Use the official Cyleria domain, confirm the current client and port, and read the latest rules for bots, MC, PvP, and market systems.</p><a href="https://cyleria.pl/?subtopic=downloads" target="_blank" rel="nofollow noopener noreferrer">Open official downloads</a></div><div className="cyntara-wiki__recommended"><h3>Explore the directory</h3><p>Compare Cyleria with other Open Tibia worlds by client, PvP, region, rates, and activity.</p><a className="cyntara-wiki__button" href="/?search=Cyleria">Browse similar servers</a></div></aside>
      </div>
    </main>
  );
}

function SectionHeading({ children }) { return <div className="cyntara-wiki__section-heading"><h2>{children}</h2></div>; }
function FactCard({ label, text }) { return <div className="rounded border border-black bg-white p-4"><h3 className="text-base font-bold text-black">{label}</h3><p className="mt-2 text-sm leading-7 text-black">{text}</p></div>; }
function DataTable({ headers, rows }) { return <div className="cyntara-wiki__table-wrap"><table className="cyntara-wiki__table"><thead><tr>{headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{rows.map((row) => <tr key={row[0]}>{row.map((cell, index) => index === 0 ? <th key={cell}>{cell}</th> : <td key={cell}>{index === 1 ? <strong>{cell}</strong> : cell}</td>)}</tr>)}</tbody></table></div>; }
function ExternalLink({ href, children }) { const external = href.startsWith('http'); return <a href={href} target={external ? '_blank' : undefined} rel={external ? 'nofollow noopener noreferrer' : undefined}>{children}</a>; }
function SourceLink({ href, label }) { return <a href={href} target="_blank" rel="nofollow noopener noreferrer" className="rounded border border-black bg-white p-4 font-bold hover:no-underline">{label}</a>; }
