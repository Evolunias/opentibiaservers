import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-venoreot-private-server');
}

export default function CustomVenoreotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="custom-venoreot-private-server" />;
}
