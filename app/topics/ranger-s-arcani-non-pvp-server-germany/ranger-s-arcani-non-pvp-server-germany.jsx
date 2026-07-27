import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-non-pvp-server-germany');
}

export default function RangerSArcaniNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-non-pvp-server-germany" />;
}
