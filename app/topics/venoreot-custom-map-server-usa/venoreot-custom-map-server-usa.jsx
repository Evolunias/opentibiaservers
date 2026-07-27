import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-custom-map-server-usa');
}

export default function VenoreotCustomMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-custom-map-server-usa" />;
}
