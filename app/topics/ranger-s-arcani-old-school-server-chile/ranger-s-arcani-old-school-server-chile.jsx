import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-old-school-server-chile');
}

export default function RangerSArcaniOldSchoolServerChileKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-old-school-server-chile" />;
}
