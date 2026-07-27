import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-venoreot-private-server');
}

export default function PopularVenoreotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-venoreot-private-server" />;
}
