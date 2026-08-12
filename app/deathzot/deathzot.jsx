import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-deathzot",
  "slug": "deathzot",
  "name": "DeathZot",
  "host": "deathzot.net",
  "ip": "deathzot.net",
  "port": 7171,
  "location": "Canada",
  "version": "8.6",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 1,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/canada-8-60-deathzot-99-custom-map-22-vocations-over-200-new-items-prestige-dungeons.215541/",
  "source_url": "https://otland.net/threads/canada-8-60-deathzot-99-custom-map-22-vocations-over-200-new-items-prestige-dungeons.215541/",
  "website_url": "http://deathzot.net",
  "external_launch_url": "http://deathzot.net",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "DeathZot",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:25.162Z",
  "last_seen_at": "2014-05-27T02:09:37+0200",
  "last_check": "2026-07-28T02:51:25.162Z",
  "official_summary": "DeathZot enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: Canada, version hint: 8.6, server address: deathzot.net, port 7171, official website reachable during import, 4,000 replies, 611,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "DeathZot is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: http://deathzot.net",
    "Official website responded with HTTP 200",
    "Server address: deathzot.net",
    "Server port: 7171",
    "Thread author: Synthetic_",
    "Original post date: 5/27/2014",
    "Forum discussion: 4,000 replies",
    "Thread visibility: 611,000 views",
    "Parsed version/client hint: 8.6",
    "Parsed region hint: Canada"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "Canada",
    "8.6",
    "Canada",
    "8.60"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "http://deathzot.net",
      "label": "DeathZot official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/canada-8-60-deathzot-99-custom-map-22-vocations-over-200-new-items-prestige-dungeons.215541/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "http://deathzot.net",
      "label": "http://deathzot.net"
    }
  ],
  "faq_items": [
    {
      "question": "Is DeathZot verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes http://deathzot.net as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm DeathZot?",
      "answer": "Start with http://deathzot.net and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "DeathZot exposes http://deathzot.net from its OtLand Server Gala source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function DeathzotPage() {
  return <CuratedGuideArticle page={page} />;
}
