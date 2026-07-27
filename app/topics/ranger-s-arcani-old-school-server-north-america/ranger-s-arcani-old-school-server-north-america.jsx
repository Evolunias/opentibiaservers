import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-old-school-server-north-america');
}

export default function RangerSArcaniOldSchoolServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-old-school-server-north-america" />;
}
