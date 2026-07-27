import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiara-rules');
}

export default function RealMapTibiaraRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiara-rules" />;
}
