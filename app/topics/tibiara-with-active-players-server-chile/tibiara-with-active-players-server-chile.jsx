import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-with-active-players-server-chile');
}

export default function TibiaraWithActivePlayersServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiara-with-active-players-server-chile" />;
}
