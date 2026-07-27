import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-custom-map-server-south-america');
}

export default function TibiaretroCustomMapServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-custom-map-server-south-america" />;
}
