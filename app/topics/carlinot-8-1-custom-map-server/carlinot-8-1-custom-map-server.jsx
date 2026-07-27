import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-1-custom-map-server');
}

export default function Carlinot81CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-1-custom-map-server" />;
}
