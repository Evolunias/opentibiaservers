import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-7-6-custom-map-server');
}

export default function Carlinot76CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-7-6-custom-map-server" />;
}
