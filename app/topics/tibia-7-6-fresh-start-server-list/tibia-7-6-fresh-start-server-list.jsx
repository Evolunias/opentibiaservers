import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-fresh-start-server-list');
}

export default function Tibia76FreshStartServerListKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-fresh-start-server-list" />;
}
