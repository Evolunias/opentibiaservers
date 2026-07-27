import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-15-pvp-server');
}

export default function RangerSArcani15PvpServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-15-pvp-server" />;
}
