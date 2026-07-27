import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-non-pvp-server-chile');
}

export default function NepreniaNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="neprenia-non-pvp-server-chile" />;
}
