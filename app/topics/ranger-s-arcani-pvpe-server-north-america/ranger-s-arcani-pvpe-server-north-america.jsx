import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-pvpe-server-north-america');
}

export default function RangerSArcaniPvpeServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-pvpe-server-north-america" />;
}
