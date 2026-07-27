import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-real-map-servers');
}

export default function Tibia96RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-real-map-servers" />;
}
