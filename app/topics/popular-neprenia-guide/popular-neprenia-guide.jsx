import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-neprenia-guide');
}

export default function PopularNepreniaGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-neprenia-guide" />;
}
