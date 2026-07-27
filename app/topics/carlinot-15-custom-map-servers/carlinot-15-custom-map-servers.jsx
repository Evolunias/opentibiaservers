import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-15-custom-map-servers');
}

export default function Carlinot15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="carlinot-15-custom-map-servers" />;
}
