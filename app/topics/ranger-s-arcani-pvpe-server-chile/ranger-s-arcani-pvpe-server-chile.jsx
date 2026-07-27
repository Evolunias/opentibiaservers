import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-pvpe-server-chile');
}

export default function RangerSArcaniPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-pvpe-server-chile" />;
}
