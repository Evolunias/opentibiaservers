import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-active-players-server-latin-america');
}

export default function TibiaretroWithActivePlayersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-active-players-server-latin-america" />;
}
