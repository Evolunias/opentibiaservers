import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-4-custom-map-servers');
}

export default function Tibiaretro74CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-4-custom-map-servers" />;
}
