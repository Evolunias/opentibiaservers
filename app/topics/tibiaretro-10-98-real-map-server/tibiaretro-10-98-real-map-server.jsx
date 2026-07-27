import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-10-98-real-map-server');
}

export default function Tibiaretro1098RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-10-98-real-map-server" />;
}
