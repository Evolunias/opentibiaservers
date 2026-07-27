import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-medivia-rules');
}

export default function RealMapMediviaRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-medivia-rules" />;
}
