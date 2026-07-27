import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-11-with-active-players-server');
}

export default function Ameria11WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-11-with-active-players-server" />;
}
