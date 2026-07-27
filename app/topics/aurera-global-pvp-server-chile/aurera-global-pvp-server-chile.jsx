import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-pvp-server-chile');
}

export default function AureraGlobalPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-pvp-server-chile" />;
}
