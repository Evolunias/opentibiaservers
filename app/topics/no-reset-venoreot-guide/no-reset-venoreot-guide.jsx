import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-venoreot-guide');
}

export default function NoResetVenoreotGuideKeywordPage() {
  return <StaticKeywordPage slug="no-reset-venoreot-guide" />;
}
