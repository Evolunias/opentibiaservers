import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realera-guide');
}

export default function PopularRealeraGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-realera-guide" />;
}
