import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-13-pvpe-server');
}

export default function RangerSArcani13PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-13-pvpe-server" />;
}
