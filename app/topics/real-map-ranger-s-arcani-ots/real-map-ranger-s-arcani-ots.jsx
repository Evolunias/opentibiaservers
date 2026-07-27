import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ranger-s-arcani-ots');
}

export default function RealMapRangerSArcaniOtsKeywordPage() {
  return <StaticKeywordPage slug="real-map-ranger-s-arcani-ots" />;
}
