import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-canob-client');
}

export default function HighrateCanobClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-canob-client" />;
}
