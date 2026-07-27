import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-real-map-server-south-america');
}

export default function AmeriaRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-real-map-server-south-america" />;
}
