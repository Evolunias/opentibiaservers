import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-classick-drakoria-guide');
}

export default function BestClassickDrakoriaGuideKeywordPage() {
  return <StaticKeywordPage slug="best-classick-drakoria-guide" />;
}
