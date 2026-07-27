import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-map-tibia-private-server-latin-america');
}

export default function CustomMapTibiaPrivateServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="custom-map-tibia-private-server-latin-america" />;
}
