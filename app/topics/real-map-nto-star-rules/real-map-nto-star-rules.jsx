import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-nto-star-rules');
}

export default function RealMapNtoStarRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-nto-star-rules" />;
}
