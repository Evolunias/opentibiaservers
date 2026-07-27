import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-11-real-map-servers');
}

export default function Tibiaretro11RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-11-real-map-servers" />;
}
