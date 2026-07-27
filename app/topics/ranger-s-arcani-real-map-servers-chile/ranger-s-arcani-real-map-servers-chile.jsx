import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-real-map-servers-chile');
}

export default function RangerSArcaniRealMapServersChileKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-real-map-servers-chile" />;
}
