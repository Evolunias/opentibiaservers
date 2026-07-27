import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-thornia-private-server');
}

export default function WithDiscordThorniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-thornia-private-server" />;
}
