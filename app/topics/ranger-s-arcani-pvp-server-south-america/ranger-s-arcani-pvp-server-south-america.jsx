import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-pvp-server-south-america');
}

export default function RangerSArcaniPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-pvp-server-south-america" />;
}
