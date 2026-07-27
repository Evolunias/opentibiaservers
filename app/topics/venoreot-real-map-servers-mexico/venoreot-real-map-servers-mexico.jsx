import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-real-map-servers-mexico');
}

export default function VenoreotRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="venoreot-real-map-servers-mexico" />;
}
