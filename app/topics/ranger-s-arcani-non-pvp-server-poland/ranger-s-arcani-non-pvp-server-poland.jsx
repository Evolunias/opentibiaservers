import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-non-pvp-server-poland');
}

export default function RangerSArcaniNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-non-pvp-server-poland" />;
}
