import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-real-map-servers-canada');
}

export default function VenoreotRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-real-map-servers-canada" />;
}
