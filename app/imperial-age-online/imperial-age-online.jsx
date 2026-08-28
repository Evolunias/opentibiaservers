import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "community_archive-gala-imperial-age-online",
  "slug": "imperial-age-online",
  "name": "IMPERIAL AGE ONLINE",
  "host": "imperialageonline.servegame.com",
  "ip": "imperialageonline.servegame.com",
  "port": 7171,
  "location": "USA",
  "version": "10.41",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 30,
  "source": "community_archive",
  "source_id": "https://opentibiaservers.com/",
  "source_url": "https://opentibiaservers.com/",
  "website_url": "https://imperialageonline.servegame.com/",
  "external_launch_url": "https://imperialageonline.servegame.com/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "IMPERIAL AGE ONLINE",
  "template_name": "community_archive_source_reference",
  "updated_at": "2026-07-28T02:51:25.162Z",
  "last_seen_at": "2024-07-06T02:47:03+0200",
  "last_check": "2026-07-28T02:51:25.162Z",
  "official_summary": "IMPERIAL AGE ONLINE enters the directory through a real community_archive server launch archive thread rather than an invented listing. The surviving record provides region hint: USA, version hint: 10.41, server address: imperialageonline.servegame.com, port 7171, official website reachable during import, 37 replies, 8,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "IMPERIAL AGE ONLINE is preserved through its community_archive server launch archive trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: community_archive server launch archive thread",
    "Official website/AAC: https://imperialageonline.servegame.com/",
    "Official website responded with HTTP 200",
    "Server address: imperialageonline.servegame.com",
    "Server port: 7171",
    "Thread author: doom34",
    "Original post date: 7/6/2024",
    "Forum discussion: 37 replies",
    "Thread visibility: 8,000 views",
    "Parsed version/client hint: 10.41",
    "Parsed region hint: USA"
  ],
  "tags": [
    "community_archive server launch archive",
    "community thread",
    "USA",
    "10.41",
    "USA",
    "CUSTOM"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://imperialageonline.servegame.com/",
      "label": "IMPERIAL AGE ONLINE official website"
    },
    {
      "type": "community_forum",
      "url": "https://opentibiaservers.com/",
      "label": "community_archive server launch archive thread"
    },
    {
      "type": "forum_index",
      "url": "https://opentibiaservers.com/",
      "label": "community_archive server launch archive forum"
    },
    {
      "type": "source_link",
      "url": "https://imperialageonline.servegame.com/",
      "label": "https://imperialageonline.servegame.com/"
    }
  ],
  "faq_items": [
    {
      "question": "Is IMPERIAL AGE ONLINE verified?",
      "answer": "This page verifies that a matching community_archive server launch archive thread exists and that the thread exposes https://imperialageonline.servegame.com/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm IMPERIAL AGE ONLINE?",
      "answer": "Start with https://imperialageonline.servegame.com/ and the linked community_archive thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "IMPERIAL AGE ONLINE exposes https://imperialageonline.servegame.com/ from its community_archive server launch archive source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
    },
    {
      "title": "Why this community_archive source matters",
      "body": "community_archive server launch archive is one of the longest-running community advertising boards for Open Tibia servers. A thread there can preserve launch positioning, owner updates, community replies, screenshots, and player discussion that a compact server-list row cannot show."
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

export default function ImperialAgeOnlinePage() {
  return <CuratedGuideArticle page={page} />;
}
