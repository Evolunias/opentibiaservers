import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-alastera-guide');
}

export default function PopularAlasteraGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-alastera-guide" />;
}
