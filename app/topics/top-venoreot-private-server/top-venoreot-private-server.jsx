import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-venoreot-private-server');
}

export default function TopVenoreotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-venoreot-private-server" />;
}
