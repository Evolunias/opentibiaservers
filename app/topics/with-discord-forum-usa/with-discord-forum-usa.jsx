import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-forum-usa');
}

export default function WithDiscordForumUsaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-forum-usa" />;
}
