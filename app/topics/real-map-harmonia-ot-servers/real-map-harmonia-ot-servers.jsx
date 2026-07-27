import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-harmonia-ot-servers');
}

export default function RealMapHarmoniaOtServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-harmonia-ot-servers" />;
}
