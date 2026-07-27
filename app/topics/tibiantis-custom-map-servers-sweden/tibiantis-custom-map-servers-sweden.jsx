import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-custom-map-servers-sweden');
}

export default function TibiantisCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-custom-map-servers-sweden" />;
}
