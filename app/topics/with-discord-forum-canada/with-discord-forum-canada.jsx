import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-forum-canada');
}

export default function WithDiscordForumCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-forum-canada" />;
}
