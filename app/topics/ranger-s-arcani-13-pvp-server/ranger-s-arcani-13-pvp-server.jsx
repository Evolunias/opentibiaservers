import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-13-pvp-server');
}

export default function RangerSArcani13PvpServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-13-pvp-server" />;
}
