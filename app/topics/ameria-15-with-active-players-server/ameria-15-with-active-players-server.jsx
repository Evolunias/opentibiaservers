import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-15-with-active-players-server');
}

export default function Ameria15WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-15-with-active-players-server" />;
}
