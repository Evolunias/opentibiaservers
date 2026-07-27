import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-custom-map-servers-sweden');
}

export default function TibiaretroCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-custom-map-servers-sweden" />;
}
