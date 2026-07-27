import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-12-real-map-servers');
}

export default function Carlinot12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="carlinot-12-real-map-servers" />;
}
