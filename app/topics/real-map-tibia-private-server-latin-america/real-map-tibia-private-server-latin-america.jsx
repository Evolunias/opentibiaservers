import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibia-private-server-latin-america');
}

export default function RealMapTibiaPrivateServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibia-private-server-latin-america" />;
}
