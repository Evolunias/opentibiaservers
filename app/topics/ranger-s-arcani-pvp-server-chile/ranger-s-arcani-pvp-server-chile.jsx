import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-pvp-server-chile');
}

export default function RangerSArcaniPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-pvp-server-chile" />;
}
