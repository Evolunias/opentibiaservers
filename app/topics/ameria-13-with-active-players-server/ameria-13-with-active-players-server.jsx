import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-13-with-active-players-server');
}

export default function Ameria13WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-13-with-active-players-server" />;
}
