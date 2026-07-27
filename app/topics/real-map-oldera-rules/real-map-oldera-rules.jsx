import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-oldera-rules');
}

export default function RealMapOlderaRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-oldera-rules" />;
}
