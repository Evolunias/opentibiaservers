import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-infernal-ot-ots');
}

export default function RealMapInfernalOtOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-infernal-ot-ots" />;
}
