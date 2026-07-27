import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-real-map-server-north-america');
}

export default function TibiaretroRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-real-map-server-north-america" />;
}
