import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-non-pvp-server-chile');
}

export default function TibianusNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibianus-non-pvp-server-chile" />;
}
