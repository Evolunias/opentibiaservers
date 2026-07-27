import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-14-pvpe-server');
}

export default function RangerSArcani14PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-14-pvpe-server" />;
}
