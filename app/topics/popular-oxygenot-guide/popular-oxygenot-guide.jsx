import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-oxygenot-guide');
}

export default function PopularOxygenotGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-oxygenot-guide" />;
}
