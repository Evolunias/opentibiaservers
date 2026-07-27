import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-old-school-server-mexico');
}

export default function RangerSArcaniOldSchoolServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-old-school-server-mexico" />;
}
