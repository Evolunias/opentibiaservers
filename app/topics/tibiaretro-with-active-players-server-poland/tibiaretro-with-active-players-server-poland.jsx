import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-active-players-server-poland');
}

export default function TibiaretroWithActivePlayersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-active-players-server-poland" />;
}
