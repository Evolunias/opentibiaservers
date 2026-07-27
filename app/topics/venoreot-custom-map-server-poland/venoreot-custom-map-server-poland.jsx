import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-custom-map-server-poland');
}

export default function VenoreotCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="venoreot-custom-map-server-poland" />;
}
