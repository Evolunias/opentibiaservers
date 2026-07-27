import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-0-custom-map-servers');
}

export default function Tibiaretro80CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-0-custom-map-servers" />;
}
