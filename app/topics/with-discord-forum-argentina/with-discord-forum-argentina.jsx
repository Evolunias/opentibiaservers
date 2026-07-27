import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-forum-argentina');
}

export default function WithDiscordForumArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-forum-argentina" />;
}
