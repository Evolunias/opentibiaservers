import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-realera-rules');
}

export default function RealMapRealeraRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-realera-rules" />;
}
