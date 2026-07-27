import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-custom-map-servers');
}

export default function Tibia81CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-custom-map-servers" />;
}
