import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-canob-server');
}

export default function WithDiscordCanobServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-canob-server" />;
}
