import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-status-chile');
}

export default function PvpEnforcedStatusChileKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-status-chile" />;
}
