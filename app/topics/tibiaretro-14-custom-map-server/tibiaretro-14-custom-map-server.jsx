import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-14-custom-map-server');
}

export default function Tibiaretro14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-14-custom-map-server" />;
}
