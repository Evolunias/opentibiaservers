import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ameria-guide');
}

export default function FreshStartAmeriaGuideKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ameria-guide" />;
}
