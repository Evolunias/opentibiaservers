import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-venoreot-server');
}

export default function ActiveVenoreotServerKeywordPage() {
  return <StaticKeywordPage slug="active-venoreot-server" />;
}
