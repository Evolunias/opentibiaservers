import CuratedGuideArticle from '@/app/components/CuratedGuideArticle';
import { buildArticleMetadata } from '@/lib/page-metadata';

const page = {
  "id": "community_archive-gala-tibiantis-online",
  "slug": "tibiantis-online",
  "name": "Tibiantis Online",
  "host": "tibiantis.online",
  "ip": "tibiantis.online",
  "port": 7171,
  "location": "UK",
  "version": "7.4",
  "players_online": 0,
  "max_players": null,
  "players_peak": null,
  "uptime_percent": null,
  "source_rank": 2,
  "source": "community_archive",
  "source_id": "https://opentibiaservers.com/",
  "source_url": "https://opentibiaservers.com/",
  "website_url": "https://tibiantis.online",
  "external_launch_url": "https://tibiantis.online",
  "contact_discord": null,
  "claim_status": "unclaimed",
  "content_status": "source_thread",
  "keyword_primary": "Tibiantis Online",
  "template_name": "community_archive_source_reference",
  "updated_at": "2026-07-28T02:51:24.705Z",
  "last_seen_at": "2020-03-29T03:33:30+0200",
  "last_check": "2026-07-28T02:51:24.705Z",
  "official_summary": "Tibiantis Online enters the directory through a real community_archive server launch archive thread rather than an invented listing. The surviving record provides region hint: UK, version hint: 7.4, server address: tibiantis.online, port 7171, official website reachable during import, 3,000 replies, 648,000 views. The linked thread and official website should agree on the launch date, client, rules, community channels, screenshots, and account path before a player installs anything. The original launch post remains linked so readers can inspect the author's own wording and dated context.",
  "description": "Tibiantis Online is preserved through its community_archive server launch archive trail: source thread, official-site signals, post date, discussion activity, server address, client clues, and the community context surrounding its launch.",
  "feature_bullets": [
    "Source: community_archive server launch archive thread",
    "Official website/AAC: https://tibiantis.online",
    "Official website responded with HTTP 200",
    "Server address: tibiantis.online",
    "Server port: 7171",
    "Thread author: kay",
    "Original post date: 3/29/2020",
    "Forum discussion: 3,000 replies",
    "Thread visibility: 648,000 views",
    "Parsed version/client hint: 7.4",
    "Parsed region hint: UK"
  ],
  "tags": [
    "community_archive server launch archive",
    "community thread",
    "UK",
    "7.4",
    "UK",
    "7.4"
  ],
  "research_sources": [
    {
      "type": "official_website",
      "url": "https://tibiantis.online",
      "label": "Tibiantis Online official website"
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
      "url": "https://tibiantis.online",
      "label": "https://tibiantis.online"
    },
    {
      "type": "source_link",
      "url": "https://www.youtube.com/c/TibiantisOnline",
      "label": "TibiantisOnline"
    }
  ],
  "faq_items": [
    {
      "question": "Is Tibiantis Online verified?",
      "answer": "This page verifies that a matching community_archive server launch archive thread exists and that the thread exposes https://tibiantis.online as an official website/AAC candidate. Owner verification still requires a claim, DNS/site proof, or current in-game confirmation."
    },
    {
      "question": "Where should players confirm Tibiantis Online?",
      "answer": "Start with https://tibiantis.online and the linked community_archive thread, then verify account creation, client download, Discord/forum links, rules, screenshots, and current live population before installing anything."
    }
  ],
  "custom_sections": [
    {
      "title": "Official website signal",
      "body": "Tibiantis Online exposes https://tibiantis.online from its community_archive server launch archive source context. The import checked that site during the crawl and recorded a reachable HTTP 200 response. This makes the page stronger than a title-only forum scrape because players can jump from source thread to official account/download context."
    },
    {
      "title": "Public media and screenshot leads",
      "body": "The source thread includes public media links that may contain screenshots, launch graphics, videos, or gameplay previews: https://www.youtube.com/c/TibiantisOnline. These should be linked for attribution unless the owner grants permission to mirror assets locally."
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

export default function TibiantisOnlinePage() {
  return <CuratedGuideArticle page={page} />;
}
