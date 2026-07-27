import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-6-custom-map-servers');
}

export default function Tibiaretro76CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-6-custom-map-servers" />;
}
