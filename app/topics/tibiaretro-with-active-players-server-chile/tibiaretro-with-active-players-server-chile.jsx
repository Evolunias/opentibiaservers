import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-active-players-server-chile');
}

export default function TibiaretroWithActivePlayersServerChileKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-active-players-server-chile" />;
}
