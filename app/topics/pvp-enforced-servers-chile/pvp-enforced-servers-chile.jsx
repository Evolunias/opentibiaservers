import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvp-enforced-servers-chile');
}

export default function PvpEnforcedServersChileKeywordPage() {
  return <StaticKeywordPage slug="pvp-enforced-servers-chile" />;
}
