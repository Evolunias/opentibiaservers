import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-9-6-pvp-server');
}

export default function RangerSArcani96PvpServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-9-6-pvp-server" />;
}
