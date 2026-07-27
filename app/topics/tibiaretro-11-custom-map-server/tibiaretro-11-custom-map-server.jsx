import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-11-custom-map-server');
}

export default function Tibiaretro11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-11-custom-map-server" />;
}
