import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-saintsot-rules');
}

export default function RealMapSaintsotRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-saintsot-rules" />;
}
