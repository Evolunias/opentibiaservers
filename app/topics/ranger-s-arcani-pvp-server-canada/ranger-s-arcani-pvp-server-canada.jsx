import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-pvp-server-canada');
}

export default function RangerSArcaniPvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-pvp-server-canada" />;
}
