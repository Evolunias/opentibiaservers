import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-ameria-guide');
}

export default function CustomAmeriaGuideKeywordPage() {
  return <StaticKeywordPage slug="custom-ameria-guide" />;
}
