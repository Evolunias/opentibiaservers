import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-7-6-pvp-server');
}

export default function RangerSArcani76PvpServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-7-6-pvp-server" />;
}
