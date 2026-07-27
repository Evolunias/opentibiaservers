import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ameria-guide');
}

export default function CurrentAmeriaGuideKeywordPage() {
  return <StaticKeywordPage slug="current-ameria-guide" />;
}
