import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-canob-discord');
}

export default function WithDiscordCanobDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-discord-canob-discord" />;
}
