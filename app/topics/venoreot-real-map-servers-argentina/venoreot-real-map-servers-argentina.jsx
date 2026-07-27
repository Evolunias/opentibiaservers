import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-real-map-servers-argentina');
}

export default function VenoreotRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-real-map-servers-argentina" />;
}
