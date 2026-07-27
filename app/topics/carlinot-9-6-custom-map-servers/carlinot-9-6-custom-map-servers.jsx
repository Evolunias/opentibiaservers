import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-9-6-custom-map-servers');
}

export default function Carlinot96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="carlinot-9-6-custom-map-servers" />;
}
