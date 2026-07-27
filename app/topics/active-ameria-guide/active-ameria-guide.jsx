import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-ameria-guide');
}

export default function ActiveAmeriaGuideKeywordPage() {
  return <StaticKeywordPage slug="active-ameria-guide" />;
}
