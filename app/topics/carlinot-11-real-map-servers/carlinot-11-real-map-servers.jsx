import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-11-real-map-servers');
}

export default function Carlinot11RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="carlinot-11-real-map-servers" />;
}
