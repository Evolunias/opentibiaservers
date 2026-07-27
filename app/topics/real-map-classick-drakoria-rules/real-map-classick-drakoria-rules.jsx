import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-classick-drakoria-rules');
}

export default function RealMapClassickDrakoriaRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-classick-drakoria-rules" />;
}
