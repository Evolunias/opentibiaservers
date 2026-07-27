import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-forum-europe');
}

export default function WithDiscordForumEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-discord-forum-europe" />;
}
