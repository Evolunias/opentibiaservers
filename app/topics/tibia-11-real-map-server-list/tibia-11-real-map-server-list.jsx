import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-real-map-server-list');
}

export default function Tibia11RealMapServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-real-map-server-list" />;
}
