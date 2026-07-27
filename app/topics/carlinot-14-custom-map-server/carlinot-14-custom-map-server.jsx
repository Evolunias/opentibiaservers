import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-14-custom-map-server');
}

export default function Carlinot14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-14-custom-map-server" />;
}
