import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thaisot-rules');
}

export default function RealMapThaisotRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-thaisot-rules" />;
}
