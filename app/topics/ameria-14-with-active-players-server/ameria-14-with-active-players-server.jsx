import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-14-with-active-players-server');
}

export default function Ameria14WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-14-with-active-players-server" />;
}
