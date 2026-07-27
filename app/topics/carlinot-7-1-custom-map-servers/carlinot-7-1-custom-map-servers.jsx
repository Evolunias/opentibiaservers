import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-7-1-custom-map-servers');
}

export default function Carlinot71CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="carlinot-7-1-custom-map-servers" />;
}
