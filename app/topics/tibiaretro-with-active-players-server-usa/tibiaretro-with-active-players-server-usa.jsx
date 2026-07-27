import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-active-players-server-usa');
}

export default function TibiaretroWithActivePlayersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-active-players-server-usa" />;
}
