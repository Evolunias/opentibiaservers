import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-real-map-server-argentina');
}

export default function VenoreotRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-real-map-server-argentina" />;
}
