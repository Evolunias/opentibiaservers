import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-pvpe-server-uk');
}

export default function RangerSArcaniPvpeServerUkKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-pvpe-server-uk" />;
}
