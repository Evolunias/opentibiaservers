import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-custom-map-server-germany');
}

export default function AmeriaCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="ameria-custom-map-server-germany" />;
}
