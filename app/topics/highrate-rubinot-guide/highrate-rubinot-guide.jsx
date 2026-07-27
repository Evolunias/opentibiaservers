import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-rubinot-guide');
}

export default function HighrateRubinotGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-rubinot-guide" />;
}
