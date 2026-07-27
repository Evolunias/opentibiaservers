import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ruthless-chaos-rules');
}

export default function RealMapRuthlessChaosRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-ruthless-chaos-rules" />;
}
