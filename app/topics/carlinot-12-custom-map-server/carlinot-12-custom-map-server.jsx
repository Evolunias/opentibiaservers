import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-12-custom-map-server');
}

export default function Carlinot12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-12-custom-map-server" />;
}
