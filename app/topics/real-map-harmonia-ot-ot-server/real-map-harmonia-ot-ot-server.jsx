import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-harmonia-ot-ot-server');
}

export default function RealMapHarmoniaOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-harmonia-ot-ot-server" />;
}
