import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-pvpe-server-south-america');
}

export default function RangerSArcaniPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-pvpe-server-south-america" />;
}
