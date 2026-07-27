import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-rubinot-rules');
}

export default function RealMapRubinotRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-rubinot-rules" />;
}
