import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-14-real-map-servers');
}

export default function Tibiaretro14RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-14-real-map-servers" />;
}
