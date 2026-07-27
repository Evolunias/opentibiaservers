import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-real-map-servers-canada');
}

export default function TibiaretroRealMapServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-real-map-servers-canada" />;
}
