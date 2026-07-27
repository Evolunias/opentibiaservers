import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-venoreot-private-server');
}

export default function CurrentVenoreotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-venoreot-private-server" />;
}
