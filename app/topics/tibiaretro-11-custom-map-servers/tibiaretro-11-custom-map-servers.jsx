import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-11-custom-map-servers');
}

export default function Tibiaretro11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-11-custom-map-servers" />;
}
