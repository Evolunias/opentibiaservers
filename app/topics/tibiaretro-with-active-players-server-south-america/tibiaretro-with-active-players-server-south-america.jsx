import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-active-players-server-south-america');
}

export default function TibiaretroWithActivePlayersServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-active-players-server-south-america" />;
}
