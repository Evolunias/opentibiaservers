import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-pvp-server-chile');
}

export default function NoxiousotPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-pvp-server-chile" />;
}
