import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-13-with-active-players-server');
}

export default function Tibiaretro13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-13-with-active-players-server" />;
}
