import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-realera-private-server');
}

export default function WithDiscordRealeraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-realera-private-server" />;
}
