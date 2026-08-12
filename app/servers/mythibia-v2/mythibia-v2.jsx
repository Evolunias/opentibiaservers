import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-mythibia-v2",
  "slug": "mythibia-v2",
  "name": "Mythibia v2",
  "host": "mythibia.online",
  "ip": "mythibia.online",
  "port": 7171,
  "location": "USA",
  "version": "10",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 20,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/usa-8-0-mythibia-v2-launch-06-03-2026-march-6th-heavily-customized-character-stat-points-rarity-system-autoloot.292315/",
  "source_url": "https://otland.net/threads/usa-8-0-mythibia-v2-launch-06-03-2026-march-6th-heavily-customized-character-stat-points-rarity-system-autoloot.292315/",
  "website_url": "https://mythibia.online",
  "external_launch_url": "https://mythibia.online",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Mythibia v2",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:26.195Z",
  "last_seen_at": "2025-07-06T16:42:11+0200",
  "last_check": "2026-07-28T02:51:26.195Z",
  "official_summary": "Mythibia v2 enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: USA, version hint: 10, server address: mythibia.online, port 7171, official website reachable during import, 62 replies, 13,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Mythibia v2 is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://mythibia.online",
    "Official website responded with HTTP 200",
    "Server address: mythibia.online",
    "Server port: 7171",
    "Thread author: kubiczi123",
    "Original post date: 7/6/2025",
    "Forum discussion: 62 replies",
    "Thread visibility: 13,000 views",
    "Parsed version/client hint: 10",
    "Parsed region hint: USA"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "USA",
    "10",
    "USA",
    "8.0"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://mythibia.online",
      "label": "Mythibia v2 official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/usa-8-0-mythibia-v2-launch-06-03-2026-march-6th-heavily-customized-character-stat-points-rarity-system-autoloot.292315/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://mythibia.online",
      "label": "https://mythibia.online"
    }
  ],
  "faq_items": [
    {
      "question": "Is Mythibia v2 verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://mythibia.online as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Mythibia v2?",
      "answer": "Start with https://mythibia.online and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Mythibia v2 exposes https://mythibia.online from its OtLand Server Gala source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function MythibiaV2ServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
