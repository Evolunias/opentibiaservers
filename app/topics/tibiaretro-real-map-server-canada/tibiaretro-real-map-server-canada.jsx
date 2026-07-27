import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-real-map-server-canada');
}

export default function TibiaretroRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-real-map-server-canada" />;
}
