import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-open-tibia-server-mexico');
}

export default function RealMapOpenTibiaServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="real-map-open-tibia-server-mexico" />;
}
