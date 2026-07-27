import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-old-school-server-uk');
}

export default function RangerSArcaniOldSchoolServerUkKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-old-school-server-uk" />;
}
