import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-pvp-enforced-server-chile');
}

export default function KasteriaPvpEnforcedServerChileKeywordPage() {
  return <StaticKeywordPage slug="kasteria-pvp-enforced-server-chile" />;
}
