import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-custom-map-servers-sweden');
}

export default function CarlinotCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="carlinot-custom-map-servers-sweden" />;
}
