import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-unline-rules');
}

export default function RealMapUnlineRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-unline-rules" />;
}
