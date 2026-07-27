import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-custom-map-servers');
}

export default function Tibia14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-custom-map-servers" />;
}
