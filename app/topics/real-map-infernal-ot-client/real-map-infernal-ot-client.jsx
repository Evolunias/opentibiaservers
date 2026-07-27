import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-infernal-ot-client');
}

export default function RealMapInfernalOtClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-infernal-ot-client" />;
}
