import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-real-map-servers');
}

export default function Tibia81RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-real-map-servers" />;
}
