import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-custom-map-servers-germany');
}

export default function CarlinotCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="carlinot-custom-map-servers-germany" />;
}
