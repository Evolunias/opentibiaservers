import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-8-0-non-pvp-server');
}

export default function RangerSArcani80NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-8-0-non-pvp-server" />;
}
