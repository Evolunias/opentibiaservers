import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-real-map-servers-latin-america');
}

export default function VenoreotRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-real-map-servers-latin-america" />;
}
