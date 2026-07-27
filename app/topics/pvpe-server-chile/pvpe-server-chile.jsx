import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-chile');
}

export default function PvpeServerChileKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-chile" />;
}
