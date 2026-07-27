import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-server-list');
}

export default function Tibia854ServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-server-list" />;
}
