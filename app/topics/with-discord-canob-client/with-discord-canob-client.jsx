import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-canob-client');
}

export default function WithDiscordCanobClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-canob-client" />;
}
