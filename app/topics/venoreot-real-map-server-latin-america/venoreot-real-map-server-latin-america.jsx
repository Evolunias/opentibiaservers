import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-real-map-server-latin-america');
}

export default function VenoreotRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-real-map-server-latin-america" />;
}
