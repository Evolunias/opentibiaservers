import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-open-tibia-server-canada');
}

export default function RealMapOpenTibiaServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="real-map-open-tibia-server-canada" />;
}
