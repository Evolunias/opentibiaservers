import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-7-72-non-pvp-server');
}

export default function RangerSArcani772NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-7-72-non-pvp-server" />;
}
