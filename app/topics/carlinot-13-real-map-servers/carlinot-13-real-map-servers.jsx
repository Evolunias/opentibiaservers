import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-13-real-map-servers');
}

export default function Carlinot13RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="carlinot-13-real-map-servers" />;
}
