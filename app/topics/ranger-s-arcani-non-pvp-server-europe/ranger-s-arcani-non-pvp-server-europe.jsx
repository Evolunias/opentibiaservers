import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-non-pvp-server-europe');
}

export default function RangerSArcaniNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-non-pvp-server-europe" />;
}
