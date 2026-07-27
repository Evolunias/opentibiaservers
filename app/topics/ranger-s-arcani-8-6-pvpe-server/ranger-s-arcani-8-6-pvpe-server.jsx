import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-8-6-pvpe-server');
}

export default function RangerSArcani86PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-8-6-pvpe-server" />;
}
