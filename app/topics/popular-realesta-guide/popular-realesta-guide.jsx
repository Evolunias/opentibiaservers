import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-realesta-guide');
}

export default function PopularRealestaGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-realesta-guide" />;
}
