import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-thaisot-guide');
}

export default function BestThaisotGuideKeywordPage() {
  return <StaticKeywordPage slug="best-thaisot-guide" />;
}
