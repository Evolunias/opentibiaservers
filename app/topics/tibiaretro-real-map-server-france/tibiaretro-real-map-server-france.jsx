import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-real-map-server-france');
}

export default function TibiaretroRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-real-map-server-france" />;
}
