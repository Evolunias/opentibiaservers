import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-old-school-server-canada');
}

export default function RangerSArcaniOldSchoolServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-old-school-server-canada" />;
}
