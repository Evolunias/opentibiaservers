import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-1-custom-map-servers');
}

export default function Carlinot81CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-1-custom-map-servers" />;
}
