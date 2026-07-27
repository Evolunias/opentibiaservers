import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-carlinot-guide');
}

export default function PopularCarlinotGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-carlinot-guide" />;
}
