import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvp-server-germany');
}

export default function AmeriaPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvp-server-germany" />;
}
