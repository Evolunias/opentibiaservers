import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-custom-map-servers-uk');
}

export default function TibiaretroCustomMapServersUkKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-custom-map-servers-uk" />;
}
