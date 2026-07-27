import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-venoreot-ot-server');
}

export default function ActiveVenoreotOtServerKeywordPage() {
  return <StaticKeywordPage slug="active-venoreot-ot-server" />;
}
