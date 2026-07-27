import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-oxygenot-rules');
}

export default function RealMapOxygenotRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-oxygenot-rules" />;
}
