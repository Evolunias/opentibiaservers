import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-4-custom-map-server');
}

export default function Tibiaretro84CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-4-custom-map-server" />;
}
