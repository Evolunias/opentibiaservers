import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-non-pvp-server-usa');
}

export default function RangerSArcaniNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-non-pvp-server-usa" />;
}
