import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-forum-north-america');
}

export default function WithDiscordForumNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-forum-north-america" />;
}
