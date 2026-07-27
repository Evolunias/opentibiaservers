import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-10-0-with-active-players-server');
}

export default function Ameria100WithActivePlayersServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-10-0-with-active-players-server" />;
}
