import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvp-enforced-server-chile');
}

export default function NoxiousotPvpEnforcedServerChileKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvp-enforced-server-chile" />;
}
