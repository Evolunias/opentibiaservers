import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-real-map-servers-north-america');
}

export default function TibiaretroRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-real-map-servers-north-america" />;
}
