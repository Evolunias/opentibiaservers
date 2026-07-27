import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-kasteria-guide');
}

export default function TopKasteriaGuideKeywordPage() {
  return <StaticKeywordPage slug="top-kasteria-guide" />;
}
