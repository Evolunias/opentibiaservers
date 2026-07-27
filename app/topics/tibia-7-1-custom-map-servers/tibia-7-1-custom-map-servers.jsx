import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-custom-map-servers');
}

export default function Tibia71CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-custom-map-servers" />;
}
