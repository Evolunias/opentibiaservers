import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-6-custom-map-server');
}

export default function Tibiaretro76CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-6-custom-map-server" />;
}
