import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-real-map-server-argentina');
}

export default function TibiaretroRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-real-map-server-argentina" />;
}
