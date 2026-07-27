import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-venoreot-ots');
}

export default function NoResetVenoreotOtsKeywordPage() {
  return <StaticKeywordPage slug="no-reset-venoreot-ots" />;
}
