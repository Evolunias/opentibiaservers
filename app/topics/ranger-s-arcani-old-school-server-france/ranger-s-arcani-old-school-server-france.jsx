import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-old-school-server-france');
}

export default function RangerSArcaniOldSchoolServerFranceKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-old-school-server-france" />;
}
