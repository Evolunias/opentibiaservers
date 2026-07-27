import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-thaisot-guide');
}

export default function PopularThaisotGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-thaisot-guide" />;
}
