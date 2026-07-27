import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-blazera-rules');
}

export default function RealMapBlazeraRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-blazera-rules" />;
}
