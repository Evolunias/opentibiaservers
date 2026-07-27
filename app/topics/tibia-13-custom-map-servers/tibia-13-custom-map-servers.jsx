import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-custom-map-servers');
}

export default function Tibia13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-custom-map-servers" />;
}
