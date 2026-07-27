import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-real-map-open-tibia-server');
}

export default function Tibia80RealMapOpenTibiaServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-real-map-open-tibia-server" />;
}
