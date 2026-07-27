import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-12-with-active-players-server');
}

export default function Ameria12WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-12-with-active-players-server" />;
}
