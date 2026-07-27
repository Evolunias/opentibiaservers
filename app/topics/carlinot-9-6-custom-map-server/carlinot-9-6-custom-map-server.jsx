import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-9-6-custom-map-server');
}

export default function Carlinot96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-9-6-custom-map-server" />;
}
