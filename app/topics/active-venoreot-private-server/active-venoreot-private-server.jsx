import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-venoreot-private-server');
}

export default function ActiveVenoreotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="active-venoreot-private-server" />;
}
