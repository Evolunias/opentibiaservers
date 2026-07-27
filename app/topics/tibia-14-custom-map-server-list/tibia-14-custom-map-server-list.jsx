import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-custom-map-server-list');
}

export default function Tibia14CustomMapServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-custom-map-server-list" />;
}
