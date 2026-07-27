import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-real-map-server-mexico');
}

export default function VenoreotRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="venoreot-real-map-server-mexico" />;
}
