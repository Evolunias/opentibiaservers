import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-14-custom-map-servers');
}

export default function Tibiaretro14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-14-custom-map-servers" />;
}
