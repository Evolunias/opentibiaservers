import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-real-map-open-tibia-server');
}

export default function Tibia13RealMapOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-real-map-open-tibia-server" />;
}
