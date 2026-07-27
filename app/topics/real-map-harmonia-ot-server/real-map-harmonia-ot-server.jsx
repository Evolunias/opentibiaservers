import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-harmonia-ot-server');
}

export default function RealMapHarmoniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-harmonia-ot-server" />;
}
