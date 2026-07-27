import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-classick-drakoria-guide');
}

export default function NoResetClassickDrakoriaGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-classick-drakoria-guide" />;
}
