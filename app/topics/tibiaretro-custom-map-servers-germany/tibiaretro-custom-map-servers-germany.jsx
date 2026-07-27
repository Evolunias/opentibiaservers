import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-custom-map-servers-germany');
}

export default function TibiaretroCustomMapServersGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-custom-map-servers-germany" />;
}
