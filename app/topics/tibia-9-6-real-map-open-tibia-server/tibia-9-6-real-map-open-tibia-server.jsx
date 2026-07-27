import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-real-map-open-tibia-server');
}

export default function Tibia96RealMapOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-real-map-open-tibia-server" />;
}
