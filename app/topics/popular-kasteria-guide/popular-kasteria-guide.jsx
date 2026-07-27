import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-kasteria-guide');
}

export default function PopularKasteriaGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-kasteria-guide" />;
}
