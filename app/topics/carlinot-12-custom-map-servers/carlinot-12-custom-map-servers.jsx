import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-12-custom-map-servers');
}

export default function Carlinot12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="carlinot-12-custom-map-servers" />;
}
