import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiascape-rules');
}

export default function RealMapTibiascapeRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiascape-rules" />;
}
