import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-15-old-school-server');
}

export default function RangerSArcani15OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-15-old-school-server" />;
}
