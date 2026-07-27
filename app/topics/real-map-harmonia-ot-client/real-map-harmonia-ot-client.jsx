import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-harmonia-ot-client');
}

export default function RealMapHarmoniaOtClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-harmonia-ot-client" />;
}
