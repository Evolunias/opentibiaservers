import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-custom-map-servers');
}

export default function Tibia11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-custom-map-servers" />;
}
