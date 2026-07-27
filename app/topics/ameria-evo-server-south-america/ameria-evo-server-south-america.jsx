import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-evo-server-south-america');
}

export default function AmeriaEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-evo-server-south-america" />;
}
