import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-14-real-map-server');
}

export default function Carlinot14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-14-real-map-server" />;
}
