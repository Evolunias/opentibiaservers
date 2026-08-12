import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-razorot-16-01-custom-server",
  "slug": "razorot-16-01-custom-server",
  "name": "RazorOT 16.01 Custom Server",
  "host": null,
  "ip": null,
  "port": null,
  "location": "BRAZIL",
  "version": "7.4",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 160,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/brazil-7-4-razorot-16-01-custom-server.303700/",
  "source_url": "https://otland.net/threads/brazil-7-4-razorot-16-01-custom-server.303700/",
  "website_url": "https://otland.net/threads/brazil-7-4-razorot-16-01-custom-server.303700/",
  "external_launch_url": "https://otland.net/threads/brazil-7-4-razorot-16-01-custom-server.303700/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "RazorOT 16.01 Custom Server",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:27.653Z",
  "last_seen_at": "2026-01-16T20:37:15+0100",
  "last_check": "2026-07-28T02:51:27.653Z",
  "official_summary": "RazorOT 16.01 Custom Server enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: BRAZIL, version hint: 7.4, 0 replies, 496 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything.",
  "description": "RazorOT 16.01 Custom Server is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Thread author: thcavalheiro288",
    "Original post date: 1/17/2026",
    "Forum discussion: 0 replies",
    "Thread visibility: 496 views",
    "Parsed version/client hint: 7.4",
    "Parsed region hint: BRAZIL"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "BRAZIL",
    "7.4",
    "BRAZIL",
    "7.4"
  ],
  "research_sources": [
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/brazil-7-4-razorot-16-01-custom-server.303700/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    }
  ],
  "faq_items": [
    {
      "question": "Is RazorOT 16.01 Custom Server verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and preserves its public forum metadata. It does not claim owner verification until an official site, server owner claim, or current in-game listing confirms the active server details."
    },
    {
      "question": "Where should players confirm RazorOT 16.01 Custom Server?",
      "answer": "Start with the linked OtLand thread, then verify the official website, account creation path, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
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

export default function Razorot1601CustomServerServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
