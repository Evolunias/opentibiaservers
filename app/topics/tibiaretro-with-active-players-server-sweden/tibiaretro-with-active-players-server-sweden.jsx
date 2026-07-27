import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-active-players-server-sweden');
}

export default function TibiaretroWithActivePlayersServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-active-players-server-sweden" />;
}
