import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-open-tibia-server-latin-america');
}

export default function RealMapOpenTibiaServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="real-map-open-tibia-server-latin-america" />;
}
