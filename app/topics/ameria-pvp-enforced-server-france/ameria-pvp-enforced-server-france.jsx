import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvp-enforced-server-france');
}

export default function AmeriaPvpEnforcedServerFranceKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvp-enforced-server-france" />;
}
