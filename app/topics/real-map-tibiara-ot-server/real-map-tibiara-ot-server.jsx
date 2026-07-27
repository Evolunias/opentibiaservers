import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiara-ot-server');
}

export default function RealMapTibiaraOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiara-ot-server" />;
}
