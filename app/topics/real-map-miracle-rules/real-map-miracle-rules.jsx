import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-miracle-rules');
}

export default function RealMapMiracleRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-miracle-rules" />;
}
