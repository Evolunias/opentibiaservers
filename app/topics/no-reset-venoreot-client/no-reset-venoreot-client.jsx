import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-venoreot-client');
}

export default function NoResetVenoreotClientKeywordPage() {
  return <StaticKeywordPage slug="no-reset-venoreot-client" />;
}
