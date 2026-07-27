import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-classick-drakoria-guide');
}

export default function LowrateClassickDrakoriaGuideKeywordPage() {
  return <StaticKeywordPage slug="lowrate-classick-drakoria-guide" />;
}
