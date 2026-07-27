import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nto-star-pvp-server-chile');
}

export default function NtoStarPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="nto-star-pvp-server-chile" />;
}
