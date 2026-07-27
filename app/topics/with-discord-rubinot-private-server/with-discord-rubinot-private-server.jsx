import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-rubinot-private-server');
}

export default function WithDiscordRubinotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-rubinot-private-server" />;
}
