import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ameria-guide');
}

export default function LowrateAmeriaGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ameria-guide" />;
}
