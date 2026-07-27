import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-pvp-server-chile');
}

export default function SaintsotPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="saintsot-pvp-server-chile" />;
}
