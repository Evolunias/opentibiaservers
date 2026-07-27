import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('neprenia-real-map-servers-sweden');
}

export default function NepreniaRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="neprenia-real-map-servers-sweden" />;
}
