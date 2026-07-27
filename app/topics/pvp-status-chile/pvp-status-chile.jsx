import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-status-chile');
}

export default function PvpStatusChileKeywordPage() {
  return <StaticKeywordPage slug="pvp-status-chile" />;
}
