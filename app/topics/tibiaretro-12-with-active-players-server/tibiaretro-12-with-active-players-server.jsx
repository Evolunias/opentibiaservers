import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-12-with-active-players-server');
}

export default function Tibiaretro12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-12-with-active-players-server" />;
}
