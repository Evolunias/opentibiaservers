import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-real-map-server-poland');
}

export default function TibiaretroRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-real-map-server-poland" />;
}
