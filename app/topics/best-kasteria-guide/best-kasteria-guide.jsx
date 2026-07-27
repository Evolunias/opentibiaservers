import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-kasteria-guide');
}

export default function BestKasteriaGuideKeywordPage() {
  return <StaticKeywordPage slug="best-kasteria-guide" />;
}
