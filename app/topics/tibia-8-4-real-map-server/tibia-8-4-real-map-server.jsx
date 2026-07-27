import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-real-map-server');
}

export default function Tibia84RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-real-map-server" />;
}
