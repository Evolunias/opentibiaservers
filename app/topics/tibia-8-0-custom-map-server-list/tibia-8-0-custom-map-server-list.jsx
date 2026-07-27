import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-custom-map-server-list');
}

export default function Tibia80CustomMapServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-custom-map-server-list" />;
}
