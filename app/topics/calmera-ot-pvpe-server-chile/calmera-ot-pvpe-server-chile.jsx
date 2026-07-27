import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('calmera-ot-pvpe-server-chile');
}

export default function CalmeraOtPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="calmera-ot-pvpe-server-chile" />;
}
