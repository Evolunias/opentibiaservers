import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-10-98-real-map-servers');
}

export default function Tibiaretro1098RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-10-98-real-map-servers" />;
}
