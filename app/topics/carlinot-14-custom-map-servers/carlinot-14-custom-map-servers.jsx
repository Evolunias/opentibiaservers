import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-14-custom-map-servers');
}

export default function Carlinot14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="carlinot-14-custom-map-servers" />;
}
