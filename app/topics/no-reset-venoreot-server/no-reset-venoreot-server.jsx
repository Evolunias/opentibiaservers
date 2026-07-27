import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-venoreot-server');
}

export default function NoResetVenoreotServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-venoreot-server" />;
}
