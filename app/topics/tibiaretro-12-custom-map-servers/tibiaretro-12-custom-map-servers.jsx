import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-12-custom-map-servers');
}

export default function Tibiaretro12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-12-custom-map-servers" />;
}
