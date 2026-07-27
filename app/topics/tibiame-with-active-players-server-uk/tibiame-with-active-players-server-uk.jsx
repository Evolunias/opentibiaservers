import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-active-players-server-uk');
}

export default function TibiameWithActivePlayersServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-active-players-server-uk" />;
}
