import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-custom-map-server-list');
}

export default function Tibia76CustomMapServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-custom-map-server-list" />;
}
