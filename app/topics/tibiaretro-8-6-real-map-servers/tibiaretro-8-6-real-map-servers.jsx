import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-6-real-map-servers');
}

export default function Tibiaretro86RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-6-real-map-servers" />;
}
