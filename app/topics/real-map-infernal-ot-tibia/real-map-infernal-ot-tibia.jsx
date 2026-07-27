import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-infernal-ot-tibia');
}

export default function RealMapInfernalOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-infernal-ot-tibia" />;
}
