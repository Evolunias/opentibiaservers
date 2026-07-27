import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-11-real-map-server');
}

export default function Carlinot11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-11-real-map-server" />;
}
