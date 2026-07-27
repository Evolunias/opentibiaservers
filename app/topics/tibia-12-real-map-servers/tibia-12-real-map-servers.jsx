import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-real-map-servers');
}

export default function Tibia12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-real-map-servers" />;
}
