import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-1-with-active-players-server');
}

export default function Tibiaretro71WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-1-with-active-players-server" />;
}
