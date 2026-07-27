import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-pvp-server-europe');
}

export default function AmeriaPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="ameria-pvp-server-europe" />;
}
