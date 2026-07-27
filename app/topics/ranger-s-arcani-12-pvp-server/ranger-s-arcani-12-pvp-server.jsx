import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-12-pvp-server');
}

export default function RangerSArcani12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-12-pvp-server" />;
}
