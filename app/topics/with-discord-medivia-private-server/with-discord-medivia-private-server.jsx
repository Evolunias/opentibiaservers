import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-medivia-private-server');
}

export default function WithDiscordMediviaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-medivia-private-server" />;
}
