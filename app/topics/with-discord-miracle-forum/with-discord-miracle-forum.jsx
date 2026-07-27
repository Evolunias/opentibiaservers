import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-miracle-forum');
}

export default function WithDiscordMiracleForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-miracle-forum" />;
}
