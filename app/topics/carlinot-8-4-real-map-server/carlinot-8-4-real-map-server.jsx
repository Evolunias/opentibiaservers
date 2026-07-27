import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-4-real-map-server');
}

export default function Carlinot84RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-4-real-map-server" />;
}
