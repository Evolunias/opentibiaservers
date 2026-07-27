import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-arcaniarl-rules');
}

export default function RealMapArcaniarlRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-arcaniarl-rules" />;
}
