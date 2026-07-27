import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-eldera-rules');
}

export default function RealMapElderaRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-eldera-rules" />;
}
