import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-venoreot-server');
}

export default function FreshStartVenoreotServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-venoreot-server" />;
}
