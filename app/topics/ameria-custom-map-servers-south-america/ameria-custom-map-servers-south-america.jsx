import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-custom-map-servers-south-america');
}

export default function AmeriaCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="ameria-custom-map-servers-south-america" />;
}
