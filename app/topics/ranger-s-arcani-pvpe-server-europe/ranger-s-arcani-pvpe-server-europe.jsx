import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-pvpe-server-europe');
}

export default function RangerSArcaniPvpeServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-pvpe-server-europe" />;
}
