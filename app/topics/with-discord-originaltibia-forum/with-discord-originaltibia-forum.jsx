import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-originaltibia-forum');
}

export default function WithDiscordOriginaltibiaForumKeywordPage() {
  return <StaticKeywordPage slug="with-discord-originaltibia-forum" />;
}
