import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-real-map-server-germany');
}

export default function TibiaretroRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-real-map-server-germany" />;
}
