import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-pvp-enforced-server-chile');
}

export default function RubinotPvpEnforcedServerChileKeywordPage() {
  return <StaticKeywordPage slug="rubinot-pvp-enforced-server-chile" />;
}
