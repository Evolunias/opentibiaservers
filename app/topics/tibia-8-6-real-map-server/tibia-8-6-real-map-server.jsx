import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-real-map-server');
}

export default function Tibia86RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-real-map-server" />;
}
