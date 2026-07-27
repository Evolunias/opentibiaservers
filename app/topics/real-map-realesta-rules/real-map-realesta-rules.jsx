import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-realesta-rules');
}

export default function RealMapRealestaRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-realesta-rules" />;
}
