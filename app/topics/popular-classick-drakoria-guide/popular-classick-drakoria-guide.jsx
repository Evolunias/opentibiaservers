import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-classick-drakoria-guide');
}

export default function PopularClassickDrakoriaGuideKeywordPage() {
  return <StaticKeywordPage slug="popular-classick-drakoria-guide" />;
}
