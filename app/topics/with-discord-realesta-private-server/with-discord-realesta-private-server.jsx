import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-realesta-private-server');
}

export default function WithDiscordRealestaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-realesta-private-server" />;
}
