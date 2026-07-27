import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-14-with-active-players-server');
}

export default function Tibiaretro14WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-14-with-active-players-server" />;
}
