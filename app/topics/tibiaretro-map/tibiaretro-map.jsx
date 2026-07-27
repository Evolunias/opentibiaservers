import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-map');
}

export default function TibiaretroMapKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-map" />;
}
