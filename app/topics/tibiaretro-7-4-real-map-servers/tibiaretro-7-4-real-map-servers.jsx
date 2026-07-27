import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-4-real-map-servers');
}

export default function Tibiaretro74RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-4-real-map-servers" />;
}
