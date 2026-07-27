import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-8-54-pvp-server');
}

export default function RangerSArcani854PvpServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-8-54-pvp-server" />;
}
