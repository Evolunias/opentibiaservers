import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-venoreot-ot-server');
}

export default function NoResetVenoreotOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-venoreot-ot-server" />;
}
