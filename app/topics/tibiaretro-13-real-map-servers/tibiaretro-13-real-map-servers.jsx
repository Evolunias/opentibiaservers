import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-13-real-map-servers');
}

export default function Tibiaretro13RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-13-real-map-servers" />;
}
