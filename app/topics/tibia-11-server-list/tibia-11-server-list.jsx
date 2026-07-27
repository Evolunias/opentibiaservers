import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-server-list');
}

export default function Tibia11ServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-server-list" />;
}
