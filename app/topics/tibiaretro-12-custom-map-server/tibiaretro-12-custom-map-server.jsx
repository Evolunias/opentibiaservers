import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-12-custom-map-server');
}

export default function Tibiaretro12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-12-custom-map-server" />;
}
