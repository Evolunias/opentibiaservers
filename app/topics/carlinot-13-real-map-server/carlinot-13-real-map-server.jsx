import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-13-real-map-server');
}

export default function Carlinot13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-13-real-map-server" />;
}
