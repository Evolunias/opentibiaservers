import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-non-pvp-server-south-america');
}

export default function RangerSArcaniNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-non-pvp-server-south-america" />;
}
