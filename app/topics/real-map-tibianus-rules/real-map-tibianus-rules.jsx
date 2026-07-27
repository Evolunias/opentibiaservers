import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibianus-rules');
}

export default function RealMapTibianusRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibianus-rules" />;
}
