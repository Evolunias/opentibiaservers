import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-real-map-servers');
}

export default function Tibia71RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-real-map-servers" />;
}
