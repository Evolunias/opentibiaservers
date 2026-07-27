import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-8-0-old-school-server');
}

export default function RangerSArcani80OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-8-0-old-school-server" />;
}
