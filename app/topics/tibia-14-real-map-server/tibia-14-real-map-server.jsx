import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-real-map-server');
}

export default function Tibia14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-real-map-server" />;
}
