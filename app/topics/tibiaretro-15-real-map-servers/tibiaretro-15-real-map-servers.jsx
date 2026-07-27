import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-15-real-map-servers');
}

export default function Tibiaretro15RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-15-real-map-servers" />;
}
