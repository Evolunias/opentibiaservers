import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-7-6-real-map-servers');
}

export default function Tibiaretro76RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-7-6-real-map-servers" />;
}
