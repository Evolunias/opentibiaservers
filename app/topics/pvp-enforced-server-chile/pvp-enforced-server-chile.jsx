import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-server-chile');
}

export default function PvpEnforcedServerChileKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-server-chile" />;
}
