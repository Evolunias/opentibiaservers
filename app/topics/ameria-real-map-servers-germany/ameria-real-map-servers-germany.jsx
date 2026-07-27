import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-real-map-servers-germany');
}

export default function AmeriaRealMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="ameria-real-map-servers-germany" />;
}
