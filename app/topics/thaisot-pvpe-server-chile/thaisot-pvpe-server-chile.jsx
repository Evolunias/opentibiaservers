import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-pvpe-server-chile');
}

export default function ThaisotPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="thaisot-pvpe-server-chile" />;
}
