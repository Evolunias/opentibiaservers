import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-natala",
  "slug": "natala",
  "name": "Natala",
  "host": "Natala-ot.net",
  "ip": "Natala-ot.net",
  "port": 7171,
  "location": "Germany",
  "version": "8",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 19,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/germany-8-60-natala-12th-february-pvp-wars-explore-80-quests-raids-bosses-dungeons-fun-balanced-vocations.298390/",
  "source_url": "https://otland.net/threads/germany-8-60-natala-12th-february-pvp-wars-explore-80-quests-raids-bosses-dungeons-fun-balanced-vocations.298390/",
  "website_url": "https://natala-ot.net/",
  "external_launch_url": "https://natala-ot.net/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Natala",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:23.803Z",
  "last_seen_at": "2025-09-06T13:54:58+0200",
  "last_check": "2026-07-28T02:51:23.803Z",
  "official_summary": "Natala enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: Germany, version hint: 8, server address: Natala-ot.net, port 7171, official website reachable during import, 69 replies, 13,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Natala is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://natala-ot.net/",
    "Official website responded with HTTP 200",
    "Server address: Natala-ot.net",
    "Server port: 7171",
    "Thread author: 3alola1",
    "Original post date: 9/6/2025",
    "Forum discussion: 69 replies",
    "Thread visibility: 13,000 views",
    "Parsed version/client hint: 8",
    "Parsed region hint: Germany"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "Germany",
    "8",
    "Germany",
    "8.60",
    "12th February"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://natala-ot.net/",
      "label": "Natala official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/germany-8-60-natala-12th-february-pvp-wars-explore-80-quests-raids-bosses-dungeons-fun-balanced-vocations.298390/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://natala-ot.net/",
      "label": "https://natala-ot.net/"
    },
    {
      "type": "source_link",
      "url": "https://github.com/molegacy",
      "label": "molegacy"
    },
    {
      "type": "source_link",
      "url": "https://www.twitch.tv/molegacy1",
      "label": "molegacy1"
    }
  ],
  "faq_items": [
    {
      "question": "Is Natala verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://natala-ot.net/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Natala?",
      "answer": "Start with https://natala-ot.net/ and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Natala exposes https://natala-ot.net/ from its OtLand Server Gala source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function NatalaPage() {
  return <CuratedGuideArticle page={page} />;
}
