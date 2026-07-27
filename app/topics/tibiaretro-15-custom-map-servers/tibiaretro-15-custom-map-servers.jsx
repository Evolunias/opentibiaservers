import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-15-custom-map-servers');
}

export default function Tibiaretro15CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-15-custom-map-servers" />;
}
