import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-evo-server-france');
}

export default function AmeriaEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="ameria-evo-server-france" />;
}
