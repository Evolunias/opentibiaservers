import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-evo-server-uk');
}

export default function AmeriaEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="ameria-evo-server-uk" />;
}
