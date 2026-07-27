import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-real-map-server-mexico');
}

export default function TibiaretroRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-real-map-server-mexico" />;
}
