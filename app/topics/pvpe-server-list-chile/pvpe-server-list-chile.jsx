import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-server-list-chile');
}

export default function PvpeServerListChileKeywordPage() {
  return <StaticKeywordPage slug="pvpe-server-list-chile" />;
}
