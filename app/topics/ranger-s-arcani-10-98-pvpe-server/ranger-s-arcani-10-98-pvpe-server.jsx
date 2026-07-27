import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-10-98-pvpe-server');
}

export default function RangerSArcani1098PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-10-98-pvpe-server" />;
}
