import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-venoreot-server');
}

export default function NewVenoreotServerKeywordPage() {
  return <StaticKeywordPage slug="new-venoreot-server" />;
}
