import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('arcaniarl-pvp-server-chile');
}

export default function ArcaniarlPvpServerChileKeywordPage() {
  return <StaticKeywordPage slug="arcaniarl-pvp-server-chile" />;
}
