import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-real-map-open-tibia-server');
}

export default function Tibia11RealMapOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-real-map-open-tibia-server" />;
}
