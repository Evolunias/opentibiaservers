import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-real-map-servers-sweden');
}

export default function TibiaretroRealMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-real-map-servers-sweden" />;
}
