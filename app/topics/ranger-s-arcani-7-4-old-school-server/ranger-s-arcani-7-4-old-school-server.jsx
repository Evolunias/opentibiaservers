import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-7-4-old-school-server');
}

export default function RangerSArcani74OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-7-4-old-school-server" />;
}
