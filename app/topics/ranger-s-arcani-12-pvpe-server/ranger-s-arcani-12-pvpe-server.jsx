import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-12-pvpe-server');
}

export default function RangerSArcani12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-12-pvpe-server" />;
}
