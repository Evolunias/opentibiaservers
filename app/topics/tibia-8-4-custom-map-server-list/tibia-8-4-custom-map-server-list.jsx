import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-custom-map-server-list');
}

export default function Tibia84CustomMapServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-custom-map-server-list" />;
}
