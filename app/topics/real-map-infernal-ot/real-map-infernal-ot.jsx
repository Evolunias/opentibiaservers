import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-infernal-ot');
}

export default function RealMapInfernalOtKeywordPage() {
  return <StaticKeywordPage slug="real-map-infernal-ot" />;
}
