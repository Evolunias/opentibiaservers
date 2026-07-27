import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-forum-brazil');
}

export default function WithDiscordForumBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-discord-forum-brazil" />;
}
