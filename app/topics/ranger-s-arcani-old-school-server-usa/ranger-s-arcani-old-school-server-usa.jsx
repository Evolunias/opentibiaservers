import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-old-school-server-usa');
}

export default function RangerSArcaniOldSchoolServerUsaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-old-school-server-usa" />;
}
