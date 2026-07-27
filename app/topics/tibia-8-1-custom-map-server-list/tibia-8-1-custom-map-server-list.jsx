import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-custom-map-server-list');
}

export default function Tibia81CustomMapServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-custom-map-server-list" />;
}
