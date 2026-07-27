import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-13-custom-map-servers');
}

export default function Tibiaretro13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-13-custom-map-servers" />;
}
