import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-custom-map-server-europe');
}

export default function CarlinotCustomMapServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="carlinot-custom-map-server-europe" />;
}
