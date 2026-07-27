import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-1-custom-map-server');
}

export default function Tibiaretro71CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-1-custom-map-server" />;
}
