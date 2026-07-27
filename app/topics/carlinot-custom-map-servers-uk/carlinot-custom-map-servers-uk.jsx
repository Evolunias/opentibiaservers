import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-custom-map-servers-uk');
}

export default function CarlinotCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="carlinot-custom-map-servers-uk" />;
}
