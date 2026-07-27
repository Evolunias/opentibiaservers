import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-custom-map-server-germany');
}

export default function VenoreotCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="venoreot-custom-map-server-germany" />;
}
