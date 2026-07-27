import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-ranger-s-arcani-official');
}

export default function RealMapRangerSArcaniOfficialKeywordPage() {
  return <StaticKeywordPage slug="real-map-ranger-s-arcani-official" />;
}
