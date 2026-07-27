import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-14-pvp-server');
}

export default function RangerSArcani14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-14-pvp-server" />;
}
