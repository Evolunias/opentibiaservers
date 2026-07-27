import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-venoreot-private-server');
}

export default function FreshStartVenoreotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-venoreot-private-server" />;
}
