import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-real-map-servers-sweden');
}

export default function VenoreotRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="venoreot-real-map-servers-sweden" />;
}
