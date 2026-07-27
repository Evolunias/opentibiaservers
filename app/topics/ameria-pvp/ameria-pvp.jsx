import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvp');
}

export default function AmeriaPvpKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvp" />;
}
