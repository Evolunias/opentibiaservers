import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-pvpe-server-argentina');
}

export default function RangerSArcaniPvpeServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-pvpe-server-argentina" />;
}
