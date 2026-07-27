import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-9-6-old-school-server');
}

export default function RangerSArcani96OldSchoolServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-9-6-old-school-server" />;
}
