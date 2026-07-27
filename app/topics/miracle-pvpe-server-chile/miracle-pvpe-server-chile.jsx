import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('miracle-pvpe-server-chile');
}

export default function MiraclePvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="miracle-pvpe-server-chile" />;
}
