import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-10-0-pvp-server');
}

export default function RangerSArcani100PvpServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-10-0-pvp-server" />;
}
