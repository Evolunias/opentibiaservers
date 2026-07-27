import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-old-school-server-latin-america');
}

export default function RangerSArcaniOldSchoolServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-old-school-server-latin-america" />;
}
