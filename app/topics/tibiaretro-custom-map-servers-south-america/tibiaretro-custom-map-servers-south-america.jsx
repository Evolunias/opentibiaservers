import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-custom-map-servers-south-america');
}

export default function TibiaretroCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-custom-map-servers-south-america" />;
}
