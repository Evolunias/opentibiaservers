import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiantis-rules');
}

export default function RealMapTibiantisRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiantis-rules" />;
}
