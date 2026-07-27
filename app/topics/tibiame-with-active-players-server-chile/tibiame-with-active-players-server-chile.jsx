import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-active-players-server-chile');
}

export default function TibiameWithActivePlayersServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-active-players-server-chile" />;
}
