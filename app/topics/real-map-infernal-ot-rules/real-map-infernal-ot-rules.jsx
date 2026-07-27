import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-infernal-ot-rules');
}

export default function RealMapInfernalOtRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-infernal-ot-rules" />;
}
