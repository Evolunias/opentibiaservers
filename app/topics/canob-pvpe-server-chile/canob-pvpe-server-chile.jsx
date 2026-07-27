import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-pvpe-server-chile');
}

export default function CanobPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="canob-pvpe-server-chile" />;
}
