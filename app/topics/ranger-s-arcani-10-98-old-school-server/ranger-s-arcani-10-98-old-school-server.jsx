import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-10-98-old-school-server');
}

export default function RangerSArcani1098OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-10-98-old-school-server" />;
}
