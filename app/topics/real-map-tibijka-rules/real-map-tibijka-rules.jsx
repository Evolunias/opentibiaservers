import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibijka-rules');
}

export default function RealMapTibijkaRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibijka-rules" />;
}
