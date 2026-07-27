import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-harmonia-ot-private-server');
}

export default function RealMapHarmoniaOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-harmonia-ot-private-server" />;
}
