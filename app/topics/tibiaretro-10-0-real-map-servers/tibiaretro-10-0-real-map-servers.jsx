import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-10-0-real-map-servers');
}

export default function Tibiaretro100RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-10-0-real-map-servers" />;
}
