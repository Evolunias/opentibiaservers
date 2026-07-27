import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-14-real-map-servers');
}

export default function Carlinot14RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="carlinot-14-real-map-servers" />;
}
