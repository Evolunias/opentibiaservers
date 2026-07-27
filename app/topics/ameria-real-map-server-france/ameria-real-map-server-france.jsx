import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-real-map-server-france');
}

export default function AmeriaRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="ameria-real-map-server-france" />;
}
