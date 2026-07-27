import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-7-1-real-map-server');
}

export default function Carlinot71RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-7-1-real-map-server" />;
}
