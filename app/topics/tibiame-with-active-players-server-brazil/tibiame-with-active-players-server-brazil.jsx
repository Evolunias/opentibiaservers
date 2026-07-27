import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-with-active-players-server-brazil');
}

export default function TibiameWithActivePlayersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="tibiame-with-active-players-server-brazil" />;
}
