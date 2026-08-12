import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-tibiaclassic",
  "slug": "tibiaclassic",
  "name": "TibiaClassic",
  "host": "Tibiaclassic.net",
  "ip": "Tibiaclassic.net",
  "port": 7171,
  "location": "ITALY",
  "version": "7.72",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 56,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/italy-7-72-tibiaclassic.304450/",
  "source_url": "https://otland.net/threads/italy-7-72-tibiaclassic.304450/",
  "website_url": "https://tibiaclassic.net",
  "external_launch_url": "https://tibiaclassic.net",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "TibiaClassic",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:25.692Z",
  "last_seen_at": "2026-04-25T00:54:40+0200",
  "last_check": "2026-07-28T02:51:25.692Z",
  "official_summary": "TibiaClassic enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: ITALY, version hint: 7.72, server address: Tibiaclassic.net, port 7171, official website reachable during import, 8 replies, 1,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "TibiaClassic is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://tibiaclassic.net",
    "Official website responded with HTTP 200",
    "Server address: Tibiaclassic.net",
    "Server port: 7171",
    "Thread author: Gunmetalx",
    "Original post date: 4/25/2026",
    "Forum discussion: 8 replies",
    "Thread visibility: 1,000 views",
    "Parsed version/client hint: 7.72",
    "Parsed region hint: ITALY"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "ITALY",
    "7.72",
    "ITALY",
    "7.72"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://tibiaclassic.net",
      "label": "TibiaClassic official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/italy-7-72-tibiaclassic.304450/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://tibiaclassic.net",
      "label": "https://tibiaclassic.net"
    }
  ],
  "faq_items": [
    {
      "question": "Is TibiaClassic verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://tibiaclassic.net as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm TibiaClassic?",
      "answer": "Start with https://tibiaclassic.net and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "TibiaClassic exposes https://tibiaclassic.net from its OtLand Server Gala source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function TibiaclassicServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
