import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-carlinot-private-server');
}

export default function WithDiscordCarlinotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-carlinot-private-server" />;
}
