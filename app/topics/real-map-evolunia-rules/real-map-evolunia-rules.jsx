import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolunia-rules');
}

export default function RealMapEvoluniaRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolunia-rules" />;
}
