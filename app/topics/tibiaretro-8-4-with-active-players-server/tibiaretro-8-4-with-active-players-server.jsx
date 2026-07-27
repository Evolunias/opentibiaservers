import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-4-with-active-players-server');
}

export default function Tibiaretro84WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-4-with-active-players-server" />;
}
