import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-baiak-ilusion-rules');
}

export default function RealMapBaiakIlusionRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-baiak-ilusion-rules" />;
}
