import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-status-chile');
}

export default function PvpeStatusChileKeywordPage() {
  return <StaticKeywordPage slug="pvpe-status-chile" />;
}
