import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-server-list-chile');
}

export default function PvpEnforcedServerListChileKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-server-list-chile" />;
}
