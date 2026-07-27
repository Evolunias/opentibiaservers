import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvp-enforced-server-usa');
}

export default function AmeriaPvpEnforcedServerUsaKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvp-enforced-server-usa" />;
}
