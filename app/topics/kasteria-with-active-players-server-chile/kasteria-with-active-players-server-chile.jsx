import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-active-players-server-chile');
}

export default function KasteriaWithActivePlayersServerChileKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-active-players-server-chile" />;
}
