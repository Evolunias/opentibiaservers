import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-active-players-server-europe');
}

export default function TibiameWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-active-players-server-europe" />;
}
