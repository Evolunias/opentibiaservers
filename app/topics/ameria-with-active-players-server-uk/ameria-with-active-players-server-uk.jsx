import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-active-players-server-uk');
}

export default function AmeriaWithActivePlayersServerUkKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-active-players-server-uk" />;
}
