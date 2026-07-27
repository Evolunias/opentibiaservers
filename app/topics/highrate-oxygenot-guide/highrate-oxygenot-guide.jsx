import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-oxygenot-guide');
}

export default function HighrateOxygenotGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-oxygenot-guide" />;
}
