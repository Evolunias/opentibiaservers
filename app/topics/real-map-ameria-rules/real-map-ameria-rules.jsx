import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ameria-rules');
}

export default function RealMapAmeriaRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-ameria-rules" />;
}
