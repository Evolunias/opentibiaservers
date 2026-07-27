import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-tibiaretro-servers');
}

export default function CustomMapTibiaretroServersKeywordPage() {
  return <StaticKeywordPage slug="custom-map-tibiaretro-servers" />;
}
