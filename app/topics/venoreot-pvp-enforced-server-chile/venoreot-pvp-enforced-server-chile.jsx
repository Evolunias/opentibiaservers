import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-pvp-enforced-server-chile');
}

export default function VenoreotPvpEnforcedServerChileKeywordPage() {
  return <StaticKeywordPage slug="venoreot-pvp-enforced-server-chile" />;
}
