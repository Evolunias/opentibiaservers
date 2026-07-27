import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-active-players-server-north-america');
}

export default function TibiaretroWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-active-players-server-north-america" />;
}
