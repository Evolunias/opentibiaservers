import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-real-map-open-tibia-server');
}

export default function Tibia81RealMapOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-real-map-open-tibia-server" />;
}
