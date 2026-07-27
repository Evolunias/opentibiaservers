import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-with-active-players-server-europe');
}

export default function AmeriaWithActivePlayersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ameria-with-active-players-server-europe" />;
}
