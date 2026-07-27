import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-custom-map-server-list');
}

export default function Tibia12CustomMapServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-custom-map-server-list" />;
}
