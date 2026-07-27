import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-non-pvp-server-uk');
}

export default function RangerSArcaniNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-non-pvp-server-uk" />;
}
