import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-carlinot-rules');
}

export default function RealMapCarlinotRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-carlinot-rules" />;
}
