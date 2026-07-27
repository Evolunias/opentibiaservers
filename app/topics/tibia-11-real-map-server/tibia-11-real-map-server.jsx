import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-real-map-server');
}

export default function Tibia11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-real-map-server" />;
}
