import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "community_archive-gala-gamelaots",
  "slug": "gamelaots",
  "name": "GamelaOTS",
  "host": "gamelaots.com",
  "ip": "gamelaots.com",
  "port": 7171,
  "location": "France",
  "version": "8.60",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 94,
  "source": "community_archive",
  "source_id": "https://opentibiaservers.com/",
  "source_url": "https://opentibiaservers.com/",
  "website_url": "https://www.gamelaots.com/",
  "external_launch_url": "https://www.gamelaots.com/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "GamelaOTS",
  "template_name": "community_archive_source_reference",
  "updated_at": "2026-07-28T02:51:25.163Z",
  "last_seen_at": "2026-04-29T03:30:10+0200",
  "last_check": "2026-07-28T02:51:25.163Z",
  "official_summary": "GamelaOTS enters the directory through a real community_archive server launch archive thread rather than an invented listing. The surviving record provides region hint: France, version hint: 8.60, server address: gamelaots.com, port 7171, 22 replies, 2,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "GamelaOTS is preserved through its community_archive server launch archive trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: community_archive server launch archive thread",
    "Official website/AAC: https://www.gamelaots.com/",
    "Server address: gamelaots.com",
    "Server port: 7171",
    "Thread author: Phant0m",
    "Original post date: 4/29/2026",
    "Forum discussion: 22 replies",
    "Thread visibility: 2,000 views",
    "Parsed version/client hint: 8.60",
    "Parsed region hint: France"
  ],
  "tags": [
    "community_archive server launch archive",
    "community thread",
    "France",
    "8.60",
    "France",
    "Custom"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://www.gamelaots.com/",
      "label": "GamelaOTS official website"
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
      "url": "https://www.gamelaots.com/",
      "label": "https://www.gamelaots.com/"
    },
    {
      "type": "source_link",
      "url": "https://github.com/LootingCorpse",
      "label": "LootingCorpse"
    },
    {
      "type": "source_link",
      "url": "https://github.com/Qlivz",
      "label": "Qlivz"
    }
  ],
  "faq_items": [
    {
      "question": "Is GamelaOTS verified?",
      "answer": "This page verifies that a matching community_archive server launch archive thread exists and that the thread exposes https://www.gamelaots.com/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm GamelaOTS?",
      "answer": "Start with https://www.gamelaots.com/ and the linked community_archive thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "GamelaOTS exposes https://www.gamelaots.com/ from its community_archive server launch archive source context. The import checked that site during the crawl and recorded the website candidate for manual verification. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
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

export default function GamelaotsPage() {
  return <CuratedGuideArticle page={page} />;
}
