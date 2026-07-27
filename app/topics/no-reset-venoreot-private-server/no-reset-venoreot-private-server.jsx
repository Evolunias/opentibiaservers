import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-venoreot-private-server');
}

export default function NoResetVenoreotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-venoreot-private-server" />;
}
