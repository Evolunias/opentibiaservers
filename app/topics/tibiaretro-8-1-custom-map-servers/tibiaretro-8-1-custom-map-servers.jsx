import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-1-custom-map-servers');
}

export default function Tibiaretro81CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-1-custom-map-servers" />;
}
