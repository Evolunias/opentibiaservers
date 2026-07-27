import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-pvpe-server-canada');
}

export default function RangerSArcaniPvpeServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-pvpe-server-canada" />;
}
