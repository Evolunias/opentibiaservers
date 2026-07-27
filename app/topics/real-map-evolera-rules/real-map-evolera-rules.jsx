import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-evolera-rules');
}

export default function RealMapEvoleraRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-evolera-rules" />;
}
