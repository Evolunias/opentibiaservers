import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-custom-map-servers-poland');
}

export default function TibiaretroCustomMapServersPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-custom-map-servers-poland" />;
}
