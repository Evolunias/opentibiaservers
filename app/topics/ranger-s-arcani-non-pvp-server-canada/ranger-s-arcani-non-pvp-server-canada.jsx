import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-non-pvp-server-canada');
}

export default function RangerSArcaniNonPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-non-pvp-server-canada" />;
}
