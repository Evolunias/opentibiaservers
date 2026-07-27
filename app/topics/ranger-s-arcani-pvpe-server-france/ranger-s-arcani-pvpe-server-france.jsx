import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-pvpe-server-france');
}

export default function RangerSArcaniPvpeServerFranceKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-pvpe-server-france" />;
}
