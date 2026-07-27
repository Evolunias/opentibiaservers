import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-real-map-servers-france');
}

export default function AmeriaRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="ameria-real-map-servers-france" />;
}
