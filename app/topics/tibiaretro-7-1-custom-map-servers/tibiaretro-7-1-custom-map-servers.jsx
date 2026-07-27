import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-1-custom-map-servers');
}

export default function Tibiaretro71CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-1-custom-map-servers" />;
}
