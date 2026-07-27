import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-7-4-custom-map-servers');
}

export default function Carlinot74CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="carlinot-7-4-custom-map-servers" />;
}
