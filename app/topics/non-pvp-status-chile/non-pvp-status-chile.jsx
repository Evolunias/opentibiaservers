import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-status-chile');
}

export default function NonPvpStatusChileKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-status-chile" />;
}
