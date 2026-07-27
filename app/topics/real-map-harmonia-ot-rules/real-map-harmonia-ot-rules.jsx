import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-harmonia-ot-rules');
}

export default function RealMapHarmoniaOtRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-harmonia-ot-rules" />;
}
