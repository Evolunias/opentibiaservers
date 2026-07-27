import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-0-real-map-server-list');
}

export default function Tibia80RealMapServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-0-real-map-server-list" />;
}
