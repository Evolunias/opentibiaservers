import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-pvpe-server-poland');
}

export default function RangerSArcaniPvpeServerPolandKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-pvpe-server-poland" />;
}
