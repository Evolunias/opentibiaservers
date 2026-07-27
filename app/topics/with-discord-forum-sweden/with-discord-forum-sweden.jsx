import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-forum-sweden');
}

export default function WithDiscordForumSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-discord-forum-sweden" />;
}
