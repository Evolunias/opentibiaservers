import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ameria-guide');
}

export default function PopularAmeriaGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-ameria-guide" />;
}
