import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-server-list');
}

export default function Tibia84ServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-server-list" />;
}
