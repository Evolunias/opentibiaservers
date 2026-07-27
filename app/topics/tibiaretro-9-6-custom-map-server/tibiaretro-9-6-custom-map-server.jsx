import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-9-6-custom-map-server');
}

export default function Tibiaretro96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-9-6-custom-map-server" />;
}
