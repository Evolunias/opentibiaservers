import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-real-map-server');
}

export default function Tibia12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-real-map-server" />;
}
