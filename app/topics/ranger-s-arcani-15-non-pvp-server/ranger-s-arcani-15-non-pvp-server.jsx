import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-15-non-pvp-server');
}

export default function RangerSArcani15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-15-non-pvp-server" />;
}
