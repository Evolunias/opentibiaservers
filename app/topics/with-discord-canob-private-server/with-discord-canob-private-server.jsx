import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-canob-private-server');
}

export default function WithDiscordCanobPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-canob-private-server" />;
}
