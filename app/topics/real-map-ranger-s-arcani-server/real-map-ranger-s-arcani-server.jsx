import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ranger-s-arcani-server');
}

export default function RealMapRangerSArcaniServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-ranger-s-arcani-server" />;
}
