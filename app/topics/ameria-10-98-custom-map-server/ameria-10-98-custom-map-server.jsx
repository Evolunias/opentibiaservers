import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-10-98-custom-map-server');
}

export default function Ameria1098CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-10-98-custom-map-server" />;
}
