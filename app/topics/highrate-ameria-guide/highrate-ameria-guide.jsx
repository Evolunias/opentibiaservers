import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-ameria-guide');
}

export default function HighrateAmeriaGuideKeywordPage() {
  return <StaticKeywordPage slug="highrate-ameria-guide" />;
}
