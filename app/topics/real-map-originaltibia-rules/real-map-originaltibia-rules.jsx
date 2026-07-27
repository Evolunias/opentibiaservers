import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-originaltibia-rules');
}

export default function RealMapOriginaltibiaRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-originaltibia-rules" />;
}
