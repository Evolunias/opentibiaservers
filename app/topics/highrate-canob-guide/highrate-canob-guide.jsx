import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-canob-guide');
}

export default function HighrateCanobGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-canob-guide" />;
}
