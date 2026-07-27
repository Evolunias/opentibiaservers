import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-6-custom-map-server');
}

export default function Carlinot86CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-6-custom-map-server" />;
}
