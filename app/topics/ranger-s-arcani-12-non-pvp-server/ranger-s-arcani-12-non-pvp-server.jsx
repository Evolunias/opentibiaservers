import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-12-non-pvp-server');
}

export default function RangerSArcani12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-12-non-pvp-server" />;
}
