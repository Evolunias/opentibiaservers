import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-venoreot-client');
}

export default function NewVenoreotClientKeywordPage() {
  return <StaticKeywordPage slug="new-venoreot-client" />;
}
