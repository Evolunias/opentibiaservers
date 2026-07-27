import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-old-school-server-argentina');
}

export default function RangerSArcaniOldSchoolServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-old-school-server-argentina" />;
}
