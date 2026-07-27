import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-custom-map-servers-poland');
}

export default function VenoreotCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="venoreot-custom-map-servers-poland" />;
}
