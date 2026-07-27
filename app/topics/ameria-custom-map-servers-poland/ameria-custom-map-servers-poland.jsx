import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('ameria-custom-map-servers-poland');
}

export default function AmeriaCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="ameria-custom-map-servers-poland" />;
}
