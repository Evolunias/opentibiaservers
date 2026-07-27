import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-pvpe');
}

export default function CalmeraOtPvpeKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-pvpe" />;
}
