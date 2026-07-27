import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-forum-mexico');
}

export default function WithDiscordForumMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-discord-forum-mexico" />;
}
