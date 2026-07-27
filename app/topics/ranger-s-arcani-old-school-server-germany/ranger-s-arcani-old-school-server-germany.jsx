import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-old-school-server-germany');
}

export default function RangerSArcaniOldSchoolServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-old-school-server-germany" />;
}
