import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-forum-uk');
}

export default function WithDiscordForumUkKeywordPage() {
  return <StaticKeywordPage slug="with-discord-forum-uk" />;
}
