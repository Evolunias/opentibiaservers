import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-custom-map-server-poland');
}

export default function CarlinotCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="carlinot-custom-map-server-poland" />;
}
