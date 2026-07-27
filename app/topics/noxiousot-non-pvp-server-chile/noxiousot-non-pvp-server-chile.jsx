import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-non-pvp-server-chile');
}

export default function NoxiousotNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-non-pvp-server-chile" />;
}
