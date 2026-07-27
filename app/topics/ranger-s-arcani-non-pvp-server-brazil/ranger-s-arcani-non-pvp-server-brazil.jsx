import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-non-pvp-server-brazil');
}

export default function RangerSArcaniNonPvpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-non-pvp-server-brazil" />;
}
