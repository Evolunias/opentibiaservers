import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-12-real-map-servers');
}

export default function Tibiaretro12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-12-real-map-servers" />;
}
