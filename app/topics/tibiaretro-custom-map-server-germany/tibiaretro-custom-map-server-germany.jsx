import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-custom-map-server-germany');
}

export default function TibiaretroCustomMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-custom-map-server-germany" />;
}
