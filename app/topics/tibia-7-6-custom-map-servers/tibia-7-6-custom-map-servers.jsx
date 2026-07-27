import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-custom-map-servers');
}

export default function Tibia76CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-custom-map-servers" />;
}
