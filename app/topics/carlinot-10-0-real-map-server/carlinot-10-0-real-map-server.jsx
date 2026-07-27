import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-10-0-real-map-server');
}

export default function Carlinot100RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-10-0-real-map-server" />;
}
