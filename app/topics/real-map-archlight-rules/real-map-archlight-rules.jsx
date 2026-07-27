import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-archlight-rules');
}

export default function RealMapArchlightRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-archlight-rules" />;
}
