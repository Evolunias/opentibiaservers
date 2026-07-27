import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-7-6-pvpe-server');
}

export default function RangerSArcani76PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-7-6-pvpe-server" />;
}
