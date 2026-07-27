import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-real-map-server-south-america');
}

export default function VenoreotRealMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-real-map-server-south-america" />;
}
