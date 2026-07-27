import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-venoreot-ot-server');
}

export default function CustomVenoreotOtServerKeywordPage() {
  return <StaticKeywordPage slug="custom-venoreot-ot-server" />;
}
