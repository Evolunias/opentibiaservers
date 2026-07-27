import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-non-pvp-server-argentina');
}

export default function RangerSArcaniNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-non-pvp-server-argentina" />;
}
