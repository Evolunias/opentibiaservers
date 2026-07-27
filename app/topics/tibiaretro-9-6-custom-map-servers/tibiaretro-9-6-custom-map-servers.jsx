import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-9-6-custom-map-servers');
}

export default function Tibiaretro96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-9-6-custom-map-servers" />;
}
