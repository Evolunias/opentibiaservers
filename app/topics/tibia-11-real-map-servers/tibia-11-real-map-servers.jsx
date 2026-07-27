import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-real-map-servers');
}

export default function Tibia11RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-real-map-servers" />;
}
