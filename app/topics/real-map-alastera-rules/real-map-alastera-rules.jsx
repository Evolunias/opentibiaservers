import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-alastera-rules');
}

export default function RealMapAlasteraRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-alastera-rules" />;
}
