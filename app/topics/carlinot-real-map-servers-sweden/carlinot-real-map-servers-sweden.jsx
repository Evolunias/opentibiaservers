import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-real-map-servers-sweden');
}

export default function CarlinotRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="carlinot-real-map-servers-sweden" />;
}
