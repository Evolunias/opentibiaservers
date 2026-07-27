import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-15-custom-map-server');
}

export default function Carlinot15CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-15-custom-map-server" />;
}
