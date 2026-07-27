import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-active-players-server-france');
}

export default function TibiameWithActivePlayersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-active-players-server-france" />;
}
