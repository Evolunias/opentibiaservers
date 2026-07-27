import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-6-custom-map-server');
}

export default function Tibiaretro86CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-6-custom-map-server" />;
}
