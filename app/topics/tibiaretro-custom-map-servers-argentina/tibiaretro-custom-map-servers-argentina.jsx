import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiaretro-custom-map-servers-argentina');
}

export default function TibiaretroCustomMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibiaretro-custom-map-servers-argentina" />;
}
