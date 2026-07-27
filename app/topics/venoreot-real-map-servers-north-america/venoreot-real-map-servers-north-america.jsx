import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-real-map-servers-north-america');
}

export default function VenoreotRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-real-map-servers-north-america" />;
}
