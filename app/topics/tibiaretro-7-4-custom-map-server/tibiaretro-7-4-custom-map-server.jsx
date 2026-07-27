import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-4-custom-map-server');
}

export default function Tibiaretro74CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-4-custom-map-server" />;
}
