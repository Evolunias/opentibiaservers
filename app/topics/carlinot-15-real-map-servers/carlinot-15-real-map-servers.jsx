import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-15-real-map-servers');
}

export default function Carlinot15RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="carlinot-15-real-map-servers" />;
}
