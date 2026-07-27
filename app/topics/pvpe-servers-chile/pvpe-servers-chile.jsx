import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-servers-chile');
}

export default function PvpeServersChileKeywordPage() {
  return <StaticKeywordPage slug="pvpe-servers-chile" />;
}
