import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-infernal-ot-open-tibia');
}

export default function RealMapInfernalOtOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="real-map-infernal-ot-open-tibia" />;
}
