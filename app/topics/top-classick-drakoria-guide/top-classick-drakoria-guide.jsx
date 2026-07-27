import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-classick-drakoria-guide');
}

export default function TopClassickDrakoriaGuideKeywordPage() {
  return <StaticKeywordPage slug="top-classick-drakoria-guide" />;
}
