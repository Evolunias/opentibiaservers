import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-real-map-server');
}

export default function Tibia15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-real-map-server" />;
}
