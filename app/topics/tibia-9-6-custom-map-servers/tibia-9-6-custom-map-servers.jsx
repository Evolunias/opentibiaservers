import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-custom-map-servers');
}

export default function Tibia96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-custom-map-servers" />;
}
