import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "otland-gala-castoria-classic-7-4-experience",
  "slug": "castoria-classic-7-4-experience",
  "name": "Castoria – Classic 7.4 Experience",
  "host": "castoria74.com",
  "ip": "castoria74.com",
  "port": 7171,
  "location": "GERMANY",
  "version": "7.4",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 101,
  "source": "otland_server_gala",
  "source_id": "https://otland.net/threads/germany-7-4-proxies-na-gb-br-castoria-classic-7-4-experience-opening-20-march-22-00-utc-2-crossed-swords.304155/",
  "source_url": "https://otland.net/threads/germany-7-4-proxies-na-gb-br-castoria-classic-7-4-experience-opening-20-march-22-00-utc-2-crossed-swords.304155/",
  "website_url": "https://castoria74.com",
  "external_launch_url": "https://castoria74.com",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Castoria – Classic 7.4 Experience",
  "template_name": "otland_source_reference",
  "updated_at": "2026-07-28T02:51:25.162Z",
  "last_seen_at": "2026-03-15T06:55:59+0100",
  "last_check": "2026-07-28T02:51:25.162Z",
  "official_summary": "Castoria – Classic 7.4 Experience enters the directory through a real OtLand Server Gala thread rather than an invented listing. The surviving record provides region hint: GERMANY, version hint: 7.4, server address: castoria74.com, port 7171, 15 replies, 2,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Castoria – Classic 7.4 Experience is preserved through its OtLand Server Gala trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: OtLand Server Gala thread",
    "Official website/AAC: https://castoria74.com",
    "Server address: castoria74.com",
    "Server port: 7171",
    "Thread author: golf710",
    "Original post date: 3/15/2026",
    "Forum discussion: 15 replies",
    "Thread visibility: 2,000 views",
    "Parsed version/client hint: 7.4",
    "Parsed region hint: GERMANY"
  ],
  "tags": [
    "otland server gala",
    "community thread",
    "GERMANY",
    "7.4",
    "GERMANY",
    "7.4",
    "PROXIES NA, GB & BR"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://castoria74.com",
      "label": "Castoria – Classic 7.4 Experience official website"
    },
    {
      "type": "community_forum",
      "url": "https://otland.net/threads/germany-7-4-proxies-na-gb-br-castoria-classic-7-4-experience-opening-20-march-22-00-utc-2-crossed-swords.304155/",
      "label": "OtLand Server Gala thread"
    },
    {
      "type": "forum_index",
      "url": "https://otland.net/forums/server-gala.43/",
      "label": "OtLand Server Gala forum"
    },
    {
      "type": "source_link",
      "url": "https://castoria74.com",
      "label": "https://castoria74.com"
    }
  ],
  "faq_items": [
    {
      "question": "Is Castoria – Classic 7.4 Experience verified?",
      "answer": "This page verifies that a matching OtLand Server Gala thread exists and that the thread exposes https://castoria74.com as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Castoria – Classic 7.4 Experience?",
      "answer": "Start with https://castoria74.com and the linked OtLand thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Castoria – Classic 7.4 Experience exposes https://castoria74.com from its OtLand Server Gala source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function CastoriaClassic74ExperienceServerReviewPage() {
  return <CuratedGuideArticle page={page} />;
}
