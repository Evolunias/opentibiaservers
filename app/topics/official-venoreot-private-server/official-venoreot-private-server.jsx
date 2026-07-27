import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-venoreot-private-server');
}

export default function OfficialVenoreotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="official-venoreot-private-server" />;
}
