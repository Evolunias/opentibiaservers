import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-old-school-server-europe');
}

export default function RangerSArcaniOldSchoolServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-old-school-server-europe" />;
}
