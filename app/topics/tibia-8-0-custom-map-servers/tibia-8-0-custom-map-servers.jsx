import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-custom-map-servers');
}

export default function Tibia80CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-custom-map-servers" />;
}
