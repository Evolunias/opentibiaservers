import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-venoreot-server');
}

export default function TopVenoreotServerKeywordPage() {
  return <StaticKeywordPage slug="top-venoreot-server" />;
}
