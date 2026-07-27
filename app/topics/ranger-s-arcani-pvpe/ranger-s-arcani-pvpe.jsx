import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ranger-s-arcani-pvpe');
}

export default function RangerSArcaniPvpeKeywordPage() {
  return <StaticKeywordPage slug="ranger-s-arcani-pvpe" />;
}
