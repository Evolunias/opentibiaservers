import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-custom-map-server-sweden');
}

export default function TibiaretroCustomMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-custom-map-server-sweden" />;
}
