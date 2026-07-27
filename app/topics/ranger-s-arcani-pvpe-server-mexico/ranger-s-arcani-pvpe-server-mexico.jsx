import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-pvpe-server-mexico');
}

export default function RangerSArcaniPvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-pvpe-server-mexico" />;
}
