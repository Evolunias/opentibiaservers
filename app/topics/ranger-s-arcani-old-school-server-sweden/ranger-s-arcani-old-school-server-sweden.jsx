import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-old-school-server-sweden');
}

export default function RangerSArcaniOldSchoolServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-old-school-server-sweden" />;
}
