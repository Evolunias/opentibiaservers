import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-canob-discord');
}

export default function LowrateCanobDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-canob-discord" />;
}
