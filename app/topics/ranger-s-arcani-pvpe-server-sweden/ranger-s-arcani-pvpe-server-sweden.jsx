import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-pvpe-server-sweden');
}

export default function RangerSArcaniPvpeServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-pvpe-server-sweden" />;
}
