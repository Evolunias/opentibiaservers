import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-custom-map-servers-germany');
}

export default function VenoreotCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="venoreot-custom-map-servers-germany" />;
}
