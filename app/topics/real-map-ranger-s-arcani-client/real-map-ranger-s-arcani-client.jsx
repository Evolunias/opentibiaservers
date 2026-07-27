import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ranger-s-arcani-client');
}

export default function RealMapRangerSArcaniClientKeywordPage() {
  return <StaticKeywordPage slug="real-map-ranger-s-arcani-client" />;
}
