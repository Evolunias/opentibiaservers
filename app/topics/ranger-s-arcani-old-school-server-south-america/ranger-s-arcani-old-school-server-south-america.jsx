import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-old-school-server-south-america');
}

export default function RangerSArcaniOldSchoolServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-old-school-server-south-america" />;
}
