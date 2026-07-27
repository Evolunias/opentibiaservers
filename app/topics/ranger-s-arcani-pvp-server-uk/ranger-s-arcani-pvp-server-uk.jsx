import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-pvp-server-uk');
}

export default function RangerSArcaniPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-pvp-server-uk" />;
}
