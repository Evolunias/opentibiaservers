import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-server-list');
}

export default function Tibia15ServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-server-list" />;
}
