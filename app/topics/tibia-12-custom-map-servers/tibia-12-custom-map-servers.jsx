import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-custom-map-servers');
}

export default function Tibia12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-custom-map-servers" />;
}
