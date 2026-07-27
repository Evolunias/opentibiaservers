import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-custom-map-server-sweden');
}

export default function VenoreotCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="venoreot-custom-map-server-sweden" />;
}
