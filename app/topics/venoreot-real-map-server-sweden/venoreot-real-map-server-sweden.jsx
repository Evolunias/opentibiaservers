import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-real-map-server-sweden');
}

export default function VenoreotRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="venoreot-real-map-server-sweden" />;
}
