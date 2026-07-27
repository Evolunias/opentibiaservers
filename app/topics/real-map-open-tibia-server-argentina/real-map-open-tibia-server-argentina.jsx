import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-open-tibia-server-argentina');
}

export default function RealMapOpenTibiaServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="real-map-open-tibia-server-argentina" />;
}
