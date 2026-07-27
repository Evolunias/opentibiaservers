import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-15-with-active-players-server');
}

export default function Tibiaretro15WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-15-with-active-players-server" />;
}
