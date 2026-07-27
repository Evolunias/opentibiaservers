import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-custom-map-servers-sweden');
}

export default function VenoreotCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="venoreot-custom-map-servers-sweden" />;
}
