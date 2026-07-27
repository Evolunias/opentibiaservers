import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-14-custom-map-server');
}

export default function Ameria14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-14-custom-map-server" />;
}
