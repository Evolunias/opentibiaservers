import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-infernal-ot-ot');
}

export default function RealMapInfernalOtOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-infernal-ot-ot" />;
}
