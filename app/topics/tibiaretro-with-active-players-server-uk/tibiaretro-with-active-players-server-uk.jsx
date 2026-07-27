import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-active-players-server-uk');
}

export default function TibiaretroWithActivePlayersServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-active-players-server-uk" />;
}
