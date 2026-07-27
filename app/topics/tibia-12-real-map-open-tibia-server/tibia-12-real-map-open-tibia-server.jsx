import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-real-map-open-tibia-server');
}

export default function Tibia12RealMapOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-real-map-open-tibia-server" />;
}
