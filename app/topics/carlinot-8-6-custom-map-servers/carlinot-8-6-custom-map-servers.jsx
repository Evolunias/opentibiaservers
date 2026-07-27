import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-6-custom-map-servers');
}

export default function Carlinot86CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-6-custom-map-servers" />;
}
