import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ameria-guide');
}

export default function BestAmeriaGuideKeywordPage() {
  return <StaticKeywordPage slug="best-ameria-guide" />;
}
