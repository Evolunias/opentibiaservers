import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-with-active-players-server-brazil');
}

export default function TibiaretroWithActivePlayersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-with-active-players-server-brazil" />;
}
