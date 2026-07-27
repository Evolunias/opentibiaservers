import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-real-map-servers-usa');
}

export default function TibiaretroRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-real-map-servers-usa" />;
}
