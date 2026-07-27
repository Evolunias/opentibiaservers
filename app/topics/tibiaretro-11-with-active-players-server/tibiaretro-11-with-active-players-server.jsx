import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-11-with-active-players-server');
}

export default function Tibiaretro11WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-11-with-active-players-server" />;
}
