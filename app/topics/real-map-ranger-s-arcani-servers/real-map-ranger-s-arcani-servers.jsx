import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ranger-s-arcani-servers');
}

export default function RealMapRangerSArcaniServersKeywordPage() {
  return <StaticKeywordPage slug="real-map-ranger-s-arcani-servers" />;
}
