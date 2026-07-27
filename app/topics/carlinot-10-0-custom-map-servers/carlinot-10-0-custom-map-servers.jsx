import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-10-0-custom-map-servers');
}

export default function Carlinot100CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="carlinot-10-0-custom-map-servers" />;
}
