import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvp-enforced-server-brazil');
}

export default function AmeriaPvpEnforcedServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvp-enforced-server-brazil" />;
}
