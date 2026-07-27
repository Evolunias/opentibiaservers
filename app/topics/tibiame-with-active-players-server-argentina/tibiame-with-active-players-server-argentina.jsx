import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-active-players-server-argentina');
}

export default function TibiameWithActivePlayersServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-active-players-server-argentina" />;
}
