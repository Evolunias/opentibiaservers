import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-custom-map-server-poland');
}

export default function TibiaretroCustomMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-custom-map-server-poland" />;
}
