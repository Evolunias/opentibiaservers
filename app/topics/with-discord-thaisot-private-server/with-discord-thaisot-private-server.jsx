import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-thaisot-private-server');
}

export default function WithDiscordThaisotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-thaisot-private-server" />;
}
