import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-exodus-ot",
  "slug": "exodus-ot",
  "name": "Exodus OT",
  "host": "exodusot.org",
  "ip": "exodusot.org",
  "port": 7171,
  "location": "USA",
  "version": "15",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 116,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/usa-15-11-exodus-ot-rl-map-custom-vbot-pet-system-mutation-system-rarity-system-upgrade-system-imbuements-upgrade-maker.304863/",
  "source_url": "https://otland.net/threads/usa-15-11-exodus-ot-rl-map-custom-vbot-pet-system-mutation-system-rarity-system-upgrade-system-imbuements-upgrade-maker.304863/",
  "website_url": "https://exodusot.org/",
  "external_launch_url": "https://exodusot.org/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Exodus OT",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:24.241Z",
  "last_seen_at": "2026-06-30T03:11:25+0200",
  "last_check": "2026-07-28T02:51:24.241Z",
  "official_summary": "Exodus OT enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: USA, version hint: 15, server address: exodusot.org, port 7171, 7 replies, 978 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Exodus OT is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://exodusot.org/",
    "Server address: exodusot.org",
    "Server port: 7171",
    "Thread author: exodusot",
    "Original post date: 6/30/2026",
    "Forum discussion: 7 replies",
    "Thread visibility: 978 views",
    "Parsed version/client hint: 15",
    "Parsed region hint: USA"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "USA",
    "15",
    "USA",
    "15.11"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://exodusot.org/",
      "label": "Exodus OT official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/usa-15-11-exodus-ot-rl-map-custom-vbot-pet-system-mutation-system-rarity-system-upgrade-system-imbuements-upgrade-maker.304863/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://exodusot.org/",
      "label": "https://exodusot.org/"
    }
  ],
  "faq_items": [
    {
      "question": "Is Exodus OT verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://exodusot.org/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Exodus OT?",
      "answer": "Start with https://exodusot.org/ and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Exodus OT exposes https://exodusot.org/ from its OtLand Server Gala source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
    },
    {
      "title": "Why this OtLand source matters",
      "body": "OtLand Server Gala is one of the longest-running community advertising boards for Open Tibia servers. A thread there can preserve launch positioning, owner updates, community replies, screenshots, and player discussion that a compact server-list row cannot show."
    },
    {
      "title": "What this page still needs from the community",
      "body": "This record should be expanded with owner-confirmed homepage links, screenshots, client/download details, rates, PvP rules, update history, Discord or forum links, and player reviews. Until those are verified, the page keeps source facts separate from missing details."
    }
  ]
};

export function generateMetadata() {
  return buildArticleMetadata(page);
}

export default function ExodusOtServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
