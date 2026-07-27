import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-non-pvp-server-chile');
}

export default function NtoStarNonPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="nto-star-non-pvp-server-chile" />;
}
