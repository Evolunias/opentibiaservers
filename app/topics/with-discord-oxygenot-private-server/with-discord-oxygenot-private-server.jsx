import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-oxygenot-private-server');
}

export default function WithDiscordOxygenotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-oxygenot-private-server" />;
}
