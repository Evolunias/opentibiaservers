import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-pvpe-server-latin-america');
}

export default function RangerSArcaniPvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-pvpe-server-latin-america" />;
}
