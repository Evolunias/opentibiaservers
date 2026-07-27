import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-custom-map-server-list');
}

export default function Tibia11CustomMapServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-custom-map-server-list" />;
}
