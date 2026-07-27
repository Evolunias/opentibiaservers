import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-venoreot-private-server');
}

export default function NewVenoreotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="new-venoreot-private-server" />;
}
