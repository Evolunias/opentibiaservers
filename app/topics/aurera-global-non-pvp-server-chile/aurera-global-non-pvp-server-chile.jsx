import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-non-pvp-server-chile');
}

export default function AureraGlobalNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-non-pvp-server-chile" />;
}
