import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-client-chile');
}

export default function PvpEnforcedClientChileKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-client-chile" />;
}
