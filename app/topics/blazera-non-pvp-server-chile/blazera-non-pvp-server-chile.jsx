import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('blazera-non-pvp-server-chile');
}

export default function BlazeraNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="blazera-non-pvp-server-chile" />;
}
