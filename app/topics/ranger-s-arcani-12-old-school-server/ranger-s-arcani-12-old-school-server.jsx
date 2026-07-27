import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-12-old-school-server');
}

export default function RangerSArcani12OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-12-old-school-server" />;
}
