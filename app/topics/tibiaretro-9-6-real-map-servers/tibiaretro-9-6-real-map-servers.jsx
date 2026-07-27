import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-9-6-real-map-servers');
}

export default function Tibiaretro96RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-9-6-real-map-servers" />;
}
