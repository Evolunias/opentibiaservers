import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-custom-map-servers-germany');
}

export default function AmeriaCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="ameria-custom-map-servers-germany" />;
}
