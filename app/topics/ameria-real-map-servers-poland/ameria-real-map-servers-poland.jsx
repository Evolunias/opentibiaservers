import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-real-map-servers-poland');
}

export default function AmeriaRealMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="ameria-real-map-servers-poland" />;
}
