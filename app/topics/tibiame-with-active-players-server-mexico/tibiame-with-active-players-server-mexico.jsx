import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-active-players-server-mexico');
}

export default function TibiameWithActivePlayersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-active-players-server-mexico" />;
}
