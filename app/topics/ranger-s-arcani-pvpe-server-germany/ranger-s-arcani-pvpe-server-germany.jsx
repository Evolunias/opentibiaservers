import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-pvpe-server-germany');
}

export default function RangerSArcaniPvpeServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-pvpe-server-germany" />;
}
