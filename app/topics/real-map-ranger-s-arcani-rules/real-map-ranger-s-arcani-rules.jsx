import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ranger-s-arcani-rules');
}

export default function RealMapRangerSArcaniRulesKeywordPage() {
  return <StaticKeywordPage slug="real-map-ranger-s-arcani-rules" />;
}
