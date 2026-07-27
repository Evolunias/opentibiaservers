import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-medivia-ot-server');
}

export default function RealMapMediviaOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-medivia-ot-server" />;
}
