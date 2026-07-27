import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-real-map-server');
}

export default function Tibia80RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-real-map-server" />;
}
