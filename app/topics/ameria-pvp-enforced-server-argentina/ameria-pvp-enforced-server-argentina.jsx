import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvp-enforced-server-argentina');
}

export default function AmeriaPvpEnforcedServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvp-enforced-server-argentina" />;
}
