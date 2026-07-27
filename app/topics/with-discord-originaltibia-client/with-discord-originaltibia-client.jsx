import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-originaltibia-client');
}

export default function WithDiscordOriginaltibiaClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-originaltibia-client" />;
}
