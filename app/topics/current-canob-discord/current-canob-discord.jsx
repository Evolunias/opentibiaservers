import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-canob-discord');
}

export default function CurrentCanobDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-canob-discord" />;
}
