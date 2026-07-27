import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvpe');
}

export default function ThaisotPvpeKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvpe" />;
}
