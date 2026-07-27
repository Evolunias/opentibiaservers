import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ameria-guide');
}

export default function TopAmeriaGuideKeywordPage() {
  return <StaticKeywordPage slug="top-ameria-guide" />;
}
