import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-custom-map-servers-france');
}

export default function AmeriaCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="ameria-custom-map-servers-france" />;
}
