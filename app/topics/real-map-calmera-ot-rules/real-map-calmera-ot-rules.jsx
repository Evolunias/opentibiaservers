import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-calmera-ot-rules');
}

export default function RealMapCalmeraOtRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-calmera-ot-rules" />;
}
