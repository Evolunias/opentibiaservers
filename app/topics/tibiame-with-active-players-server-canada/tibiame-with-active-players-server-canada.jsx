import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-active-players-server-canada');
}

export default function TibiameWithActivePlayersServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-active-players-server-canada" />;
}
