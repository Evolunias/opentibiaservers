import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-real-map-server-sweden');
}

export default function TibiaretroRealMapServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-real-map-server-sweden" />;
}
