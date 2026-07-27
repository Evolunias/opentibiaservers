import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-canob-rules');
}

export default function RealMapCanobRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-canob-rules" />;
}
