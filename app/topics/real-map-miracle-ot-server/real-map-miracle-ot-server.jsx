import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-miracle-ot-server');
}

export default function RealMapMiracleOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-miracle-ot-server" />;
}
