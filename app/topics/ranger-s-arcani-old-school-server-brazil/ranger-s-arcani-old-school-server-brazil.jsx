import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-old-school-server-brazil');
}

export default function RangerSArcaniOldSchoolServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-old-school-server-brazil" />;
}
