import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-13-custom-map-server');
}

export default function Carlinot13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-13-custom-map-server" />;
}
