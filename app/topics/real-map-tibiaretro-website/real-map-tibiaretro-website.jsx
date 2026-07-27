import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiaretro-website');
}

export default function RealMapTibiaretroWebsiteKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiaretro-website" />;
}
