import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-venoreot-ot-server');
}

export default function OfficialVenoreotOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-venoreot-ot-server" />;
}
