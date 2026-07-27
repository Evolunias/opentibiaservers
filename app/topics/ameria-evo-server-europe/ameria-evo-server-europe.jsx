import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-evo-server-europe');
}

export default function AmeriaEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ameria-evo-server-europe" />;
}
