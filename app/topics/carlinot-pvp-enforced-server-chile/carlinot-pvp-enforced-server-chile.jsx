import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-pvp-enforced-server-chile');
}

export default function CarlinotPvpEnforcedServerChileKeywordPage() {
  return <StaticKeywordPage slug="carlinot-pvp-enforced-server-chile" />;
}
