import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-custom-map-servers-sweden');
}

export default function NepreniaCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="neprenia-custom-map-servers-sweden" />;
}
