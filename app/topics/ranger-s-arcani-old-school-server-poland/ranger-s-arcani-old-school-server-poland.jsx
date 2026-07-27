import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-old-school-server-poland');
}

export default function RangerSArcaniOldSchoolServerPolandKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-old-school-server-poland" />;
}
