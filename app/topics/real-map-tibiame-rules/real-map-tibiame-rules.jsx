import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiame-rules');
}

export default function RealMapTibiameRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiame-rules" />;
}
