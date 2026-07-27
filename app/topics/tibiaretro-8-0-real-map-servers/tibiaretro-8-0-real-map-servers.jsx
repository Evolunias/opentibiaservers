import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-8-0-real-map-servers');
}

export default function Tibiaretro80RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-8-0-real-map-servers" />;
}
