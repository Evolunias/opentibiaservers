import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-custom-map-server-germany');
}

export default function CarlinotCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="carlinot-custom-map-server-germany" />;
}
