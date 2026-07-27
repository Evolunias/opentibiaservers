import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvp-enforced-server-chile');
}

export default function SaintsotPvpEnforcedServerChileKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvp-enforced-server-chile" />;
}
