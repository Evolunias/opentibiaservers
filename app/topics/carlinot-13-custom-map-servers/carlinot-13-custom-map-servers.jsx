import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-13-custom-map-servers');
}

export default function Carlinot13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="carlinot-13-custom-map-servers" />;
}
