import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-real-map-servers');
}

export default function Tibia854RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-real-map-servers" />;
}
