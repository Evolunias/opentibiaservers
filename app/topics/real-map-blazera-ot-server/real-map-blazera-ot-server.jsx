import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-blazera-ot-server');
}

export default function RealMapBlazeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-blazera-ot-server" />;
}
