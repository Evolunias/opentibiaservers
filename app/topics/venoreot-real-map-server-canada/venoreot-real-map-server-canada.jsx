import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-real-map-server-canada');
}

export default function VenoreotRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-real-map-server-canada" />;
}
