import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-thaisot-guide');
}

export default function HighrateThaisotGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-thaisot-guide" />;
}
