import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-yurots-rules');
}

export default function RealMapYurotsRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-yurots-rules" />;
}
