import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-custom-map-server-canada');
}

export default function VenoreotCustomMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-custom-map-server-canada" />;
}
