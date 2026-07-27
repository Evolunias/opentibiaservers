import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-11-custom-map-server');
}

export default function Carlinot11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-11-custom-map-server" />;
}
