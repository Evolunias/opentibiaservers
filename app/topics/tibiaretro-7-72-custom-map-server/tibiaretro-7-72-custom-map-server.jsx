import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-72-custom-map-server');
}

export default function Tibiaretro772CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-72-custom-map-server" />;
}
