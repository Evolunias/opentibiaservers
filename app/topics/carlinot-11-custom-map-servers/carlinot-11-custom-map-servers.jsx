import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-11-custom-map-servers');
}

export default function Carlinot11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="carlinot-11-custom-map-servers" />;
}
