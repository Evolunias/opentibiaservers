import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-canob-discord');
}

export default function HighrateCanobDiscordKeywordPage() {
  return <StaticKeywordPage slug="highrate-canob-discord" />;
}
