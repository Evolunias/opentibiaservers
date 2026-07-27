import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-originaltibia-server');
}

export default function WithDiscordOriginaltibiaServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-originaltibia-server" />;
}
