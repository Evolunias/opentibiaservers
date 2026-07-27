import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-8-1-custom-map-server');
}

export default function Ameria81CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="ameria-8-1-custom-map-server" />;
}
