import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-pvp-enforced-server-chile');
}

export default function OxygenotPvpEnforcedServerChileKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-pvp-enforced-server-chile" />;
}
