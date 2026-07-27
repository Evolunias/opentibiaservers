import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-custom-map-server-argentina');
}

export default function VenoreotCustomMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="venoreot-custom-map-server-argentina" />;
}
