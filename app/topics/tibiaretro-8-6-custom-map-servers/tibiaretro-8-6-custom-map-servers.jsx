import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-6-custom-map-servers');
}

export default function Tibiaretro86CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-6-custom-map-servers" />;
}
