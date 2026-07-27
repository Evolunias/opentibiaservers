import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-10-0-with-active-players-server');
}

export default function Tibiaretro100WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-10-0-with-active-players-server" />;
}
