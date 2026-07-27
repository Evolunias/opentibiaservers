import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiame-ot-server');
}

export default function RealMapTibiameOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiame-ot-server" />;
}
