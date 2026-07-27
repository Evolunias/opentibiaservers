import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-venoreot-server');
}

export default function CustomVenoreotServerKeywordPage() {
  return <StaticKeywordPage slug="custom-venoreot-server" />;
}
