import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "community_archive-gala-almyria-online",
  "slug": "almyria-online",
  "name": "Almyria Online",
  "host": "almyria.com",
  "ip": "almyria.com",
  "port": 7171,
  "location": "USA",
  "version": "10.98",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 50,
  "source": "community_archive",
  "source_id": "https://opentibiaservers.com/",
  "source_url": "https://opentibiaservers.com/",
  "website_url": "https://www.almyria.com/",
  "external_launch_url": "https://www.almyria.com/",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Almyria Online",
  "template_name": "community_archive_source_reference",
  "updated_at": "2026-07-28T02:51:26.658Z",
  "last_seen_at": "2026-01-28T14:55:19+0100",
  "last_check": "2026-07-28T02:51:26.658Z",
  "official_summary": "Almyria Online enters the directory through a real community_archive server launch archive thread rather than an invented listing. The surviving record provides region hint: USA, version hint: 10.98, server address: almyria.com, port 7171, official website reachable during import, 11 replies, 2,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Almyria Online is preserved through its community_archive server launch archive trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: community_archive server launch archive thread",
    "Official website/AAC: https://www.almyria.com/",
    "Official website responded with HTTP 200",
    "Server address: almyria.com",
    "Server port: 7171",
    "Thread author: Apollos",
    "Original post date: 1/28/2026",
    "Forum discussion: 11 replies",
    "Thread visibility: 2,000 views",
    "Parsed version/client hint: 10.98",
    "Parsed region hint: USA"
  ],
  "tags": [
    "community_archive server launch archive",
    "community thread",
    "USA",
    "10.98",
    "USA",
    "Custom"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://www.almyria.com/",
      "label": "Almyria Online official website"
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
      "url": "https://www.almyria.com/",
      "label": "https://www.almyria.com/"
    },
    {
      "type": "source_link",
      "url": "https://www.youtube.com/c/RookgaardAdventure",
      "label": "RookgaardAdventure"
    }
  ],
  "faq_items": [
    {
      "question": "Is Almyria Online verified?",
      "answer": "This page verifies that a matching community_archive server launch archive thread exists and that the thread exposes https://www.almyria.com/ as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Almyria Online?",
      "answer": "Start with https://www.almyria.com/ and the linked community_archive thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Almyria Online exposes https://www.almyria.com/ from its community_archive server launch archive source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
    },
    {
      "title": "Public media and screenshot leads",
      "body": "The source thread includes public media links that may contain screenshots, launch graphics, videos, or gameplay previews: https://www.youtube.com/c/RookgaardAdventure. These should be linked for attribution unless the owner grants permission to mirror assets locally."
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

export default function AlmyriaOnlinePage() {
  return <CuratedGuideArticle page={page} />;
}
