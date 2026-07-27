import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-forum-latin-america');
}

export default function WithDiscordForumLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-forum-latin-america" />;
}
