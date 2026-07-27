import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-real-map-server-chile');
}

export default function RangerSArcaniRealMapServerChileKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-real-map-server-chile" />;
}
