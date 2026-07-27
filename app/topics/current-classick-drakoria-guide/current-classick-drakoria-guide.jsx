import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-classick-drakoria-guide');
}

export default function CurrentClassickDrakoriaGuideKeywordPage() {
  return <StaticKeywordPage slug="current-classick-drakoria-guide" />;
}
