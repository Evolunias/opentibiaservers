import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-1-real-map-server');
}

export default function Carlinot81RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-1-real-map-server" />;
}
