import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-7-72-custom-map-server');
}

export default function Carlinot772CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-7-72-custom-map-server" />;
}
