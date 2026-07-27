import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-open-tibia-server-usa');
}

export default function RealMapOpenTibiaServerUsaKeywordPage() {
  return <StaticKeywordPage slug="real-map-open-tibia-server-usa" />;
}
