import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-custom-map-servers');
}

export default function Tibia74CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-custom-map-servers" />;
}
