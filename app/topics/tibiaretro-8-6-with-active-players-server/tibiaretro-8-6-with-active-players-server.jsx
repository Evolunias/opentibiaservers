import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-6-with-active-players-server');
}

export default function Tibiaretro86WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-6-with-active-players-server" />;
}
