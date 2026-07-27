import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-pvpe-server-chile');
}

export default function ThorniaPvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="thornia-pvpe-server-chile" />;
}
