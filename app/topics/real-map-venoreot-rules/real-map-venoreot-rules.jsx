import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-venoreot-rules');
}

export default function RealMapVenoreotRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-venoreot-rules" />;
}
