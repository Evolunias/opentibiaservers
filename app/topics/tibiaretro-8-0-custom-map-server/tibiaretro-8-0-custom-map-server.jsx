import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-0-custom-map-server');
}

export default function Tibiaretro80CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-0-custom-map-server" />;
}
