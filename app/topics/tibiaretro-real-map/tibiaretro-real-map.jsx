import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-real-map');
}

export default function TibiaretroRealMapKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-real-map" />;
}
