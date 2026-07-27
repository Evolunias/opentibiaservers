import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ranger-s-arcani-ot-server');
}

export default function RealMapRangerSArcaniOtServerKeywordPage() {
  return <StaticKeywordPage slug="real-map-ranger-s-arcani-ot-server" />;
}
